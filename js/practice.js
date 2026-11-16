const examDays = {
  day1: { name: "1º dia", areas: ["languages", "humanities"], minutes: 330 },
  day2: { name: "2º dia", areas: ["nature", "math"], minutes: 300 },
  full: { name: "Simulado completo", areas: ["languages", "humanities", "nature", "math"], minutes: 630 }
};
const attemptsStorageKey = "studyplan95.attempts.v1";
const activePracticeStorageKey = "studyplan95.practice.v1";
const essayDraftStorageKey = "studyplan95.essay-draft.v1";

function readStoredJson(key, fallback) {
  const saved = localStorage.getItem(key);
  if (!saved) return fallback;
  try {
    return JSON.parse(saved);
  } catch (error) {
    console.error(`Não foi possível ler os dados salvos em ${key}.`, error);
    return fallback;
  }
}

function reportStorageFailure(message, error) {
  console.error(message, error);
  if (typeof statusText !== "undefined") {
    statusText.textContent = "Não foi possível salvar neste navegador. Confira o espaço disponível e tente novamente.";
  }
}

function loadSavedPracticeSession() {
  const saved = readStoredJson(activePracticeStorageKey, null);
  if (!saved || !["exams", "quizzes", "review"].includes(saved.view) ||
      !Array.isArray(saved.questions) || !Array.isArray(saved.answers) ||
      saved.questions.length !== saved.answers.length) return null;
  saved.flagged = Array.isArray(saved.flagged) ? saved.flagged : [];
  saved.sections = Array.isArray(saved.sections) ? saved.sections : [];
  return saved;
}

function saveActivePracticeSession() {
  try {
    if (!practiceSession || practiceSession.score !== null) {
      localStorage.removeItem(activePracticeStorageKey);
      return;
    }
    localStorage.setItem(activePracticeStorageKey, JSON.stringify(practiceSession));
  } catch (error) {
    reportStorageFailure("Não foi possível salvar a prática em andamento.", error);
  }
}

function getAttempts() {
  const attempts = readStoredJson(attemptsStorageKey, []);
  return Array.isArray(attempts) ? attempts : [];
}

function saveAttempt(session) {
  const attempts = getAttempts();
  const attempt = {
    date: Date.now(),
    view: session.view,
    label: session.label,
    score: session.score,
    total: session.questions.length,
    elapsedMs: Math.max(0, Date.now() - session.startedAt),
    flagged: [...(session.flagged ?? [])],
    byTopic: summarizeAttempt(session),
    wrongQuestions: session.questions
      .map((question, index) => session.answers[index] === question.answer ? null : ({
        question,
        selectedAnswer: session.answers[index]
      }))
      .filter(Boolean)
  };
  attempts.push(attempt);
  localStorage.setItem(attemptsStorageKey, JSON.stringify(attempts.slice(-50)));
  session.finishedAt = attempt.date;
  localStorage.removeItem(activePracticeStorageKey);
}

function summarizeAttempt(session) {
  const topics = {};
  session.questions.forEach((question, index) => {
    const key = `${question.subjectName} · ${question.topic ?? question.partTitle}`;
    const stats = topics[key] ??= { correct: 0, wrong: 0, blank: 0 };
    const selected = session.answers[index];
    if (selected === null) stats.blank++;
    else if (selected === question.answer) stats.correct++;
    else stats.wrong++;
  });
  return topics;
}

function renderPractice() {
  if (practiceSession?.view === activeView) {
    renderPracticeSession();
    return;
  }

  const isExam = activeView === "exams";
  const title = isExam ? "Provas para praticar" : "Quizzes de revisão";
  const description = isExam
    ? "Resolva um caderno de questões inspirado no formato do ENEM, com textos de apoio, gráficos e cinco alternativas por questão."
    : "Escolha uma matéria ou misture conteúdos para revisar. As questões vêm das aulas do seu plano.";
  const questionCount = isExam ? 45 : 10;
  mainContent.innerHTML = `
    <div class="crumb"><span>Plano de Estudos 95</span><span>›</span><span class="crumb-current">${title}</span></div>
    <div class="lesson-heading"><div><h1>${title}</h1><p>${description}</p></div></div>
    <div class="practice-setup">
      <fieldset class="group-box">
        <legend>⚙️ &nbsp;Configurar prática</legend>
        ${isExam ? `<div class="form-row">
          <label for="practiceArea">Dia ou caderno</label>
          <select id="practiceArea">
            <option value="full">Simulado completo · 1º e 2º dia</option>
            <option value="day1">1º dia · Linguagens e Humanas · 5h30</option>
            <option value="day2">2º dia · Natureza e Matemática · 5h</option>
            ${examKnowledgeAreas.filter(area => area.id !== "essay").map(area => `<option value="area:${escapeHtml(area.id)}">${escapeHtml(area.name)} · caderno de treino</option>`).join("")}
          </select>
        </div>` : ""}
        <div class="form-row">
          <label for="practiceSubject">Matéria</label>
          <select id="practiceSubject">
            <option value="all">Todas as matérias</option>
            ${subjects.filter(subject => subject.id !== "essay").map(subject => `<option value="${escapeHtml(subject.id)}">${escapeHtml(subject.name)}</option>`).join("")}
          </select>
        </div>
        <div class="form-row">
          <label for="practiceDifficulty">Dificuldade</label>
          <select id="practiceDifficulty">
            <option value="all">Todas as dificuldades</option>
            <option value="basic">Básico</option>
            <option value="intermediate">Intermediário</option>
            <option value="advanced">Avançado</option>
          </select>
        </div>
        <p class="practice-summary" id="practiceAvailability"></p>
        <button class="win-button primary" type="button" data-action="start-practice">▶ ${isExam ? "Iniciar prova" : "Iniciar quiz"}</button>
      </fieldset>
      <p>${isExam ? `O ENEM oficial tem 45 questões por área. Este banco autoral tem ${examQuestionBank.length} questões por enquanto; a tela informa quantas há em cada caderno, sem completar a prova com questões repetidas.` : `O quiz terá até ${questionCount} questões.`} O cronômetro dos simulados segue a duração de referência do dia selecionado. A redação é praticada separadamente.</p>
    </div>`;
  updatePracticeAvailability();
}

function getPracticeQuestionPool() {
  const subjectId = mainContent.querySelector("#practiceSubject")?.value ?? "all";
  const difficulty = mainContent.querySelector("#practiceDifficulty")?.value ?? "all";
  const selectedArea = mainContent.querySelector("#practiceArea")?.value ?? "all";
  if (activeView === "exams") {
    return examQuestionBank.flatMap(question => {
      if (subjectId !== "all" && subjectId !== question.subjectId) return [];
      if (difficulty !== "all" && question.difficulty !== difficulty) return [];
      if (selectedArea.startsWith("area:") &&
          !examKnowledgeAreas.find(area => area.id === selectedArea.slice(5))?.subjectIds.includes(question.subjectId)) return [];
      if (selectedArea === "day1" && !examDays.day1.areas.some(areaId =>
        examKnowledgeAreas.find(area => area.id === areaId)?.subjectIds.includes(question.subjectId))) return [];
      if (selectedArea === "day2" && !examDays.day2.areas.some(areaId =>
        examKnowledgeAreas.find(area => area.id === areaId)?.subjectIds.includes(question.subjectId))) return [];
      const subject = subjects.find(item => item.id === question.subjectId);
      const partIndex = subject?.parts.findIndex(part => part.title === question.lessonRef.partTitle) ?? -1;
      return [{
        ...question,
        text: question.statement,
        partTitle: question.lessonRef.partTitle,
        partIndex,
        subjectName: subject?.name ?? question.subjectId,
        examSupport: question.support
      }];
    });
  }
  return subjects.flatMap(subject => {
    if (subject.id === "essay") return [];
    if (subjectId !== "all" && subject.id !== subjectId) return [];
    return subject.parts.flatMap((part, partIndex) => {
      const partDifficulty = part.difficulty ?? difficultyForIndex(partIndex, subject.parts.length);
      if (difficulty !== "all" && partDifficulty !== difficulty) return [];
      return (Array.isArray(part.questions) ? part.questions : []).map((question, questionIndex) => ({
        ...question,
        subjectId: subject.id,
        subjectName: subject.name,
        partTitle: part.title,
        partIntro: part.intro,
        partPoints: part.points,
        partIndex,
        questionIndex
      }));
    });
  });
}

function renderExamChart(chart) {
  const max = Math.max(...chart.values);
  const axisMax = Math.ceil(max / 10) * 10 || 10;
  const chartTop = 30;
  const chartBottom = 230;
  const chartHeight = chartBottom - chartTop;
  const barWidth = 56;
  const positions = chart.labels.map((_, index) =>
    86 + (index + 0.5) * 484 / chart.labels.length
  );
  const grid = Array.from({ length: 5 }, (_, index) => {
    const value = axisMax - axisMax * index / 4;
    const y = chartTop + chartHeight * index / 4;
    return `<line x1="66" y1="${y}" x2="570" y2="${y}" stroke="#bbb" stroke-dasharray="3 3"/>
      <text x="58" y="${y + 4}" text-anchor="end" font-size="10" fill="#333">${Number.isInteger(value) ? value : value.toFixed(1)}</text>`;
  }).join("");
  const bars = chart.values.map((value, index) => {
    const height = chartHeight * value / axisMax;
    const x = positions[index] - barWidth / 2;
    const y = chartBottom - height;
    return `<rect x="${x}" y="${y}" width="${barWidth}" height="${height}" fill="#316ac5" stroke="#173d78"/>
      <text x="${positions[index]}" y="${Math.max(y - 6, 15)}" text-anchor="middle" font-size="11" fill="#222">${value}</text>
      <text x="${positions[index]}" y="250" text-anchor="middle" font-size="10" fill="#222">${escapeHtml(chart.labels[index])}</text>`;
  }).join("");
  const rows = chart.labels.map((label, index) =>
    `<tr><th scope="row">${escapeHtml(label)}</th><td>${chart.values[index]} ${escapeHtml(chart.unit)}</td></tr>`
  ).join("");
  return `<figure class="exam-graphic">
    <h4>${escapeHtml(chart.title)}</h4>
    <p>${escapeHtml(chart.description)}</p>
    <svg viewBox="0 0 620 270" role="img" aria-label="${escapeHtml(`${chart.title}: ${chart.labels.map((label, index) => `${label}, ${chart.values[index]} ${chart.unit}`).join("; ")}`)}">
      ${grid}<line x1="66" y1="${chartBottom}" x2="570" y2="${chartBottom}" stroke="#333"/>
      ${bars}<text x="12" y="18" font-size="10" fill="#333">${escapeHtml(chart.unit)}</text>
    </svg>
    <table><caption class="sr-only">${escapeHtml(chart.title)}: dados em tabela</caption><tbody>${rows}</tbody></table>
    <figcaption>${escapeHtml(chart.source ?? "Dados hipotéticos, elaborados para fins didáticos; não representam estatísticas oficiais.")}</figcaption>
  </figure>`;
}

function renderExamSupport(question) {
  return question.examSupport.map((support, index) => {
    if (support.type === "chart") {
      return renderExamChart({ ...support.chart, source: support.source });
    }
    return `<article class="exam-stimulus">
      <h4>Texto de apoio${question.examSupport.filter(item => item.type === "text").length > 1 ? ` ${index + 1}` : ""}</h4>
      <p>${escapeHtml(support.content)}</p>
      ${support.source ? `<p><small>${escapeHtml(support.source)}</small></p>` : ""}
    </article>`;
  }).join("");
}

function getSelectedExamAreas() {
  const subjectId = mainContent.querySelector("#practiceSubject")?.value ?? "all";
  if (subjectId !== "all") {
    return examKnowledgeAreas.filter(area => area.id !== "essay" && area.subjectIds.includes(subjectId));
  }
  const areaId = mainContent.querySelector("#practiceArea")?.value ?? "all";
  const areaIds = areaId.startsWith("area:")
    ? [areaId.slice(5)]
    : examDays[areaId]?.areas ?? examDays.full.areas;
  return areaIds.map(id => examKnowledgeAreas.find(area => area.id === id)).filter(Boolean);
}

function shuffleList(items) {
  return items.map(item => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function shuffleChoices(question) {
  const order = shuffleList(question.choices.map((_, index) => index));
  return {
    ...question,
    choices: order.map(index => question.choices[index]),
    answer: order.indexOf(question.answer)
  };
}

function updatePracticeAvailability() {
  const summary = mainContent.querySelector("#practiceAvailability");
  if (!summary) return;
  const pool = getPracticeQuestionPool();
  if (activeView === "exams") {
    const areas = getSelectedExamAreas();
    const sectionCounts = areas.map(area => pool.filter(question => area.subjectIds.includes(question.subjectId)).length)
      .filter(areaCount => areaCount > 0)
      .map(areaCount => Math.min(45, areaCount));
    const count = sectionCounts.reduce((sum, sectionCount) => sum + sectionCount, 0);
    const cadernoCount = sectionCounts.length;
    const cadernoLabel = cadernoCount === 1 ? "1 caderno de área" : `${cadernoCount} cadernos de área`;
    const areaId = mainContent.querySelector("#practiceArea")?.value ?? "full";
    const timerMinutes = examDays[areaId]?.minutes ?? (areas[0]?.id === "math" || areas[0]?.id === "nature" ? 150 : 165);
    const duration = formatTime(timerMinutes * 60000);
    summary.textContent = count
      ? `${count} questões autorais disponíveis em ${cadernoLabel}. Referência de tempo para esta modalidade: ${duration}. O caderno oficial tem 45 questões por área.`
      : "Não há questões para esta seleção. Escolha outra matéria ou dificuldade.";
  } else {
    const count = pool.length;
    summary.textContent = count
      ? `${count} questões disponíveis. ${Math.min(10, count)} serão selecionadas para este quiz.`
      : "Não há questões para esta seleção. Escolha outra matéria ou dificuldade.";
  }
  const startButton = mainContent.querySelector('[data-action="start-practice"]');
  if (startButton) startButton.disabled = activeView === "exams"
    ? !getSelectedExamAreas().some(area => pool.some(question => area.subjectIds.includes(question.subjectId)))
    : pool.length === 0;
}

function renderPracticeQuestion(question, index, isExam, checked) {
  const examNumber = question.examNumber ?? index + 1;
  return `<fieldset class="practice-question${isExam ? " exam-question" : ""}" data-practice-question="${index}">
    <legend>${isExam ? `Questão ${String(examNumber).padStart(2, "0")}` : `Questão ${index + 1}`}</legend>
    <p class="question-source">${escapeHtml(question.subjectName)} · ${escapeHtml(question.topic ?? question.partTitle)}</p>
    ${isExam ? renderExamSupport(question) : ""}
    <h3>${escapeHtml(question.statement ?? question.text)}</h3>
    <div class="answers">${question.choices.map((choice, choiceIndex) => {
      const selected = practiceSession.answers[index] === choiceIndex;
      const correct = checked && choiceIndex === question.answer;
      const incorrect = checked && selected && choiceIndex !== question.answer;
      return `<label class="answer${correct ? " correct" : ""}${incorrect ? " incorrect" : ""}">
        <input type="radio" name="practice-${index}" value="${choiceIndex}"${selected ? " checked" : ""}${checked ? " disabled" : ""}>
        <span><span class="answer-letter">${isExam ? `${String.fromCharCode(65 + choiceIndex)})` : ""}</span>${escapeHtml(choice)}</span>
      </label>`;
    }).join("")}</div>
    ${isExam && !checked ? `<button class="win-button answer-flag" type="button" data-flag-question="${index}" aria-pressed="${practiceSession.flagged.includes(index)}">${practiceSession.flagged.includes(index) ? "🚩 Desmarcar revisão" : "🚩 Marcar para revisar"}</button>` : ""}
    ${checked ? `<div class="exam-review">
      <h4>${practiceSession.answers[index] === question.answer ? "Resposta correta" : practiceSession.answers[index] === null ? "Questão em branco" : "Revise esta questão"}</h4>
      <p><strong>Gabarito:</strong> ${String.fromCharCode(65 + question.answer)}) ${escapeHtml(question.choices[question.answer])}</p>
      <p>${escapeHtml(question.explanation ?? "Consulte o conteúdo relacionado para revisar este conceito.")}</p>
      ${question.lessonRef ? `<button class="win-button" type="button" data-action="review-lesson" data-question-index="${index}">Revisar esta aula</button>` : ""}
    </div>` : ""}
  </fieldset>`;
}

function formatTime(milliseconds) {
  const seconds = Math.floor(Math.max(0, milliseconds) / 1000);
  return [Math.floor(seconds / 3600), Math.floor(seconds % 3600 / 60), seconds % 60]
    .map(value => String(value).padStart(2, "0"))
    .join(":");
}

function startExamTimer() {
  if (!practiceSession?.endsAt || practiceSession.score !== null) return;
  if (examTimer !== null) clearInterval(examTimer);
  const tick = () => {
    if (!practiceSession || practiceSession.score !== null) return;
    const remaining = practiceSession.endsAt - Date.now();
    const timer = document.getElementById("examTimer");
    if (timer) timer.textContent = formatTime(remaining);
    if (remaining <= 0) {
      clearInterval(examTimer);
      examTimer = null;
      submitPractice(true);
    }
  };
  tick();
  examTimer = setInterval(tick, 1000);
}

function updateQuestionNavigator() {
  if (!practiceSession || practiceSession.score !== null) return;
  practiceSession.questions.forEach((_, index) => {
    const button = mainContent.querySelector(`[data-question-jump="${index}"]`);
    if (!button) return;
    button.classList.toggle("answered", practiceSession.answers[index] !== null);
    button.classList.toggle("flagged", practiceSession.flagged.includes(index));
    button.setAttribute("aria-label", `Questão ${index + 1}: ${
      practiceSession.flagged.includes(index) ? "marcada para revisar" : practiceSession.answers[index] !== null ? "respondida" : "em branco"
    }`);
  });
}

function renderAttemptResults(session) {
  const topics = summarizeAttempt(session);
  const rows = Object.entries(topics).map(([topic, stats]) => {
    const total = stats.correct + stats.wrong + stats.blank;
    const percentage = total ? Math.round(stats.correct * 100 / total) : 0;
    return `<tr><th scope="row">${escapeHtml(topic)}</th><td>${stats.correct}</td><td>${stats.wrong}</td><td>${stats.blank}</td><td>${percentage}%</td></tr>`;
  }).join("");
  return `<table class="exam-result-table">
    <caption class="sr-only">Desempenho por matéria e tópico</caption>
    <thead><tr><th>Matéria · tópico</th><th>Acertos</th><th>Erros</th><th>Em branco</th><th>Acerto</th></tr></thead>
    <tbody>${rows}</tbody>
  </table><p>O resultado mostra acertos e tópicos para revisar. Não é uma nota ENEM: a TRI não pode ser estimada por este simulado.</p>`;
}

function renderPracticeSession() {
  const session = practiceSession;
  const isExam = session.view === "exams";
  const isReview = session.view === "review";
  const title = isExam ? "Prova em andamento" : isReview ? "Revisão de erros" : "Quiz em andamento";
  const checked = session.score !== null;
  const questionsHtml = isExam
    ? `<div class="exam-booklet">
        <header class="exam-booklet-header"><h2>Caderno de questões · simulado</h2><p>Questões originais elaboradas a partir do conteúdo do seu plano de estudos.</p></header>
        ${session.sections.map(section => `<section class="exam-area">
          <h2 class="exam-area-heading">${escapeHtml(section.name)} · questões 01 a ${String(section.questions.length).padStart(2, "0")}</h2>
          ${section.questions.map(question => renderPracticeQuestion(question, question.sessionIndex, true, checked)).join("")}
        </section>`).join("")}
      </div>`
    : `<div class="practice-questions">${session.questions.map((question, index) =>
        renderPracticeQuestion(question, index, isReview, checked)
      ).join("")}</div>`;
  const questionNavigation = isExam && !checked
    ? `<nav class="exam-toolbar" aria-label="Painel de questões">
        <strong>Questões</strong><span class="exam-timer" id="examTimer" role="timer" aria-live="off">${formatTime(session.endsAt - Date.now())}</span>
      <small>Verde: respondida · amarelo: revisar · cinza: em branco</small>
      <div class="question-navigator">${session.questions.map((question, index) => `
        <button class="question-nav-button${session.answers[index] !== null ? " answered" : ""}${session.flagged.includes(index) ? " flagged" : ""}" type="button" data-question-jump="${index}" aria-label="Questão ${question.examNumber} · ${escapeHtml(question.examAreaName)}">
            ${isExam ? question.examNumber : index + 1}
          </button>`).join("")}</div>
        <button class="win-button" type="button" data-action="focus-mode">${session.focusMode ? "Sair do modo foco" : "Modo foco"}</button>
      </nav>` : "";
  mainContent.innerHTML = `
    <div class="crumb"><span>Plano de Estudos 95</span><span>›</span><span class="crumb-current">${title}</span></div>
    <div class="lesson-heading"><div><h1>${title}</h1><p>${escapeHtml(session.label)}</p></div></div>
    ${checked ? `<div class="practice-result" role="status">Resultado: ${session.score} de ${session.questions.length} (${Math.round(session.score * 100 / session.questions.length)}%) · ${session.answers.filter(answer => answer === null).length} em branco · tempo ${formatTime(session.elapsedMs ?? 0)}.</div>${renderAttemptResults(session)}` : `<p class="practice-summary">${session.questions.length} questões. É possível deixar itens em branco e voltar a eles pelo painel${isExam ? ` · tempo disponível: ${formatTime(session.endsAt - Date.now())}` : ""}.</p>`}
    ${isExam ? `<p class="exam-instructions">Questões autorais com textos de apoio e gráficos. Marque itens para revisar e use o cartão-resposta para navegar. Textos e dados são originais ou hipotéticos; este material não é uma prova oficial.</p>` : ""}
    ${questionNavigation}
    ${questionsHtml}
    <div class="quiz-actions">
      ${isExam ? `<button class="win-button" type="button" data-action="print-practice">Imprimir caderno</button>` : ""}
      ${checked
        ? `<button class="win-button primary" type="button" data-action="${isReview ? "review-dashboard" : "new-practice"}">${isReview ? "Voltar à revisão" : isExam ? "Nova prova" : "Novo quiz"}</button>`
        : `<button class="win-button primary" type="button" data-action="submit-practice">Conferir resultado</button>`}
      <button class="win-button" type="button" data-action="practice-home">Voltar</button>
    </div>`;
  document.body.classList.toggle("focus-mode", isExam && session.focusMode === true);
  if (isExam && !checked) startExamTimer();
}

function startPractice() {
  const pool = getPracticeQuestionPool();
  const isExam = activeView === "exams";
  if (!pool.length) {
    updatePracticeAvailability();
    return;
  }
  const selectedSubject = mainContent.querySelector("#practiceSubject").value;
  let questions;
  let sections = [];
  if (isExam) {
    sections = getSelectedExamAreas().flatMap(area => {
      const areaPool = pool.filter(question => area.subjectIds.includes(question.subjectId));
      if (!areaPool.length) return [];
      const selectedQuestions = shuffleList(areaPool)
        .slice(0, 45)
        .map((question, index) => ({
          ...shuffleChoices(question),
          examAreaId: area.id,
          examAreaName: area.name,
          examNumber: index + 1
        }));
      return [{ id: area.id, name: area.name, questions: selectedQuestions }];
    });
    let sessionIndex = 0;
    for (const section of sections) {
      for (const question of section.questions) question.sessionIndex = sessionIndex++;
    }
    questions = sections.flatMap(section => section.questions);
  } else {
    questions = shuffleList(pool).slice(0, 10);
  }
  if (!questions.length) {
    updatePracticeAvailability();
    return;
  }
  const selectedArea = mainContent.querySelector("#practiceArea")?.value ?? "full";
  const areaName = getSelectedExamAreas().map(area => area.name).join(" + ");
  const subjectName = selectedSubject !== "all"
    ? subjects.find(subject => subject.id === selectedSubject)?.name ?? "Matéria"
    : isExam ? examDays[selectedArea]?.name ?? areaName : "Todas as matérias";
  const difficulty = mainContent.querySelector("#practiceDifficulty").value;
  const difficultyName = difficulty === "all" ? "todas as dificuldades" : difficultyNames[difficulty].toLowerCase();
  const durationMinutes = examDays[selectedArea]?.minutes ??
    (getSelectedExamAreas().some(area => area.id === "math" || area.id === "nature") ? 150 : 165);
  const startedAt = Date.now();
  practiceSession = {
    view: activeView,
    questions,
    sections,
    answers: Array(questions.length).fill(null),
    flagged: [],
    score: null,
    label: `${subjectName} · ${difficultyName}`,
    startedAt,
    endsAt: isExam ? startedAt + durationMinutes * 60_000 : null,
    focusMode: false
  };
  saveActivePracticeSession();
  renderPracticeSession();
}

function startErrorReview() {
  const wrongQuestions = getAttempts().flatMap(attempt => attempt.wrongQuestions ?? [])
    .map(item => item.question)
    .filter(question => question && Array.isArray(question.choices) && Number.isInteger(question.answer));
  const pool = shuffleList(wrongQuestions).slice(0, 10);
  if (!pool.length) {
    statusText.textContent = "Seu caderno de erros está vazio. Conclua uma prática e revise as questões erradas.";
    return;
  }
  const questions = pool.map(shuffleChoices);
  practiceSession = {
    view: "review",
    questions,
    sections: [],
    answers: Array(questions.length).fill(null),
    flagged: [],
    score: null,
    label: "Questões erradas anteriormente",
    startedAt: Date.now(),
    endsAt: null,
    focusMode: false
  };
  saveActivePracticeSession();
  renderPracticeSession();
}

function submitPractice(force = false) {
  if (!practiceSession) return;
  const blanks = practiceSession.answers.filter(answer => answer === null).length;
  if (!force && blanks > 0 &&
      !confirm(`Você deixou ${blanks} questão(ões) em branco. Deseja conferir mesmo assim?`)) {
    return;
  }
  practiceSession.score = practiceSession.questions.reduce(
    (score, question, index) => score + (practiceSession.answers[index] === question.answer ? 1 : 0),
    0
  );
  practiceSession.elapsedMs = Date.now() - practiceSession.startedAt;
  if (examTimer !== null) {
    clearInterval(examTimer);
    examTimer = null;
  }
  try {
    saveAttempt(practiceSession);
  } catch (error) {
    console.error("Não foi possível salvar o histórico da prática.", error);
    statusText.textContent = "Prática concluída, mas não foi possível salvar o histórico neste navegador.";
  }
  renderPracticeSession();
  if (statusText.textContent !== "Prática concluída, mas não foi possível salvar o histórico neste navegador.") {
    statusText.textContent = `Prática concluída: ${practiceSession.score} de ${practiceSession.questions.length}.`;
  }
}

function renderReviewDashboard() {
  const attempts = getAttempts().slice().reverse();
  const objectiveAttempts = attempts.filter(attempt => Number.isFinite(attempt.score) && attempt.total > 0);
  const wrongCount = attempts.reduce((sum, attempt) => sum + (attempt.wrongQuestions?.length ?? 0), 0);
  const totalAnswers = objectiveAttempts.reduce((sum, attempt) => sum + attempt.total, 0);
  const totalCorrect = objectiveAttempts.reduce((sum, attempt) => sum + attempt.score, 0);
  const rows = attempts.slice(0, 20).map(attempt => {
    const date = new Date(attempt.date).toLocaleString("pt-BR");
    const result = Number.isFinite(attempt.score)
      ? `${attempt.score}/${attempt.total} (${Math.round(attempt.score * 100 / attempt.total)}%)`
      : `Redação · ${attempt.lines ?? 0} linhas / ${attempt.total ?? 0} palavras · sem nota automática`;
    return `<tr><td>${escapeHtml(date)}</td><td>${escapeHtml(attempt.label ?? "Prática")}</td><td>${result}</td></tr>`;
  }).join("");
  const weeklyTotals = new Map();
  for (const attempt of objectiveAttempts) {
    const date = new Date(attempt.date);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() - ((date.getDay() + 6) % 7));
    const key = date.toLocaleDateString("pt-BR");
    const week = weeklyTotals.get(key) ?? { correct: 0, total: 0 };
    week.correct += attempt.score;
    week.total += attempt.total;
    weeklyTotals.set(key, week);
  }
  const weeklyRows = [...weeklyTotals.entries()].slice(0, 8).map(([week, stats]) =>
    `<tr><th scope="row">Semana de ${escapeHtml(week)}</th><td>${stats.correct}/${stats.total}</td><td>${Math.round(stats.correct * 100 / stats.total)}%</td></tr>`
  ).join("");
  mainContent.innerHTML = `
    <div class="crumb"><span>Plano de Estudos 95</span><span>›</span><span class="crumb-current">Revisão</span></div>
    <div class="lesson-heading"><div><h1>Revisão e evolução</h1><p>Use seus resultados para escolher o próximo assunto. O desempenho mostra acertos, não uma estimativa de nota TRI.</p></div></div>
    <div class="review-summary">
      <div class="review-card"><strong>Práticas concluídas</strong>${attempts.length}</div>
      <div class="review-card"><strong>Acertos objetivos</strong>${totalCorrect} de ${totalAnswers}${totalAnswers ? ` · ${Math.round(totalCorrect * 100 / totalAnswers)}%` : ""}</div>
      <div class="review-card"><strong>Questões no caderno de erros</strong>${wrongCount}</div>
    </div>
    <button class="win-button primary" type="button" data-action="start-errors"${wrongCount ? "" : " disabled"}>Revisar questões erradas</button>
    ${weeklyRows ? `<h2>Evolução semanal</h2><table class="exam-result-table"><thead><tr><th>Período</th><th>Acertos</th><th>Percentual</th></tr></thead><tbody>${weeklyRows}</tbody></table>` : ""}
    <h2>Histórico recente</h2>
    ${attempts.length ? `<table class="exam-result-table"><thead><tr><th>Data</th><th>Prática</th><th>Resultado</th></tr></thead><tbody>${rows}</tbody></table>` : `<p>Ainda não há práticas concluídas. Faça um quiz ou prova para começar seu histórico.</p>`}
    <h2>Erros recentes</h2>
    ${wrongCount ? attempts.flatMap(attempt => attempt.wrongQuestions ?? []).slice(-10).reverse().map(({ question, selectedAnswer }) =>
      `<article class="practice-error"><p><strong>${escapeHtml(question.subjectName ?? question.subjectId)} · ${escapeHtml(question.topic ?? question.partTitle)}</strong></p>
        <p>${escapeHtml(question.statement ?? question.text)}</p>
        <p>Sua resposta: ${selectedAnswer === null ? "em branco" : escapeHtml(question.choices[selectedAnswer])} · Gabarito: ${escapeHtml(question.choices[question.answer])}</p>
        <button class="win-button" type="button" data-action="open-review-lesson" data-subject-id="${escapeHtml(question.lessonRef?.subjectId ?? question.subjectId)}" data-part-title="${escapeHtml(question.lessonRef?.partTitle ?? question.partTitle)}">Revisar esta aula</button>
      </article>`
    ).join("") : `<p>Quando você errar ou deixar uma questão em branco, ela aparecerá aqui.</p>`}`;
}

function openLessonFromPractice(index) {
  const question = practiceSession?.questions[index];
  if (!question) return;
  openLessonReference(question.lessonRef?.subjectId ?? question.subjectId, question.lessonRef?.partTitle ?? question.partTitle);
}

function openLessonReference(subjectId, partTitle) {
  const subject = subjects.find(item => item.id === subjectId);
  if (!subject) {
    statusText.textContent = "A matéria relacionada a esta questão não está disponível no plano.";
    return;
  }
  activeSubjectId = subject.id;
  const partIndex = subject.parts.findIndex(part => part.title === partTitle);
  activePartIndex = partIndex >= 0 ? partIndex : 0;
  activeDifficultyFilter = "all";
  activeCategoryFilter = null;
  practiceSession = null;
  localStorage.removeItem(activePracticeStorageKey);
  activeView = "study";
  render();
  statusText.textContent = `Aula aberta: ${subject.name} · ${subject.parts[activePartIndex]?.title ?? "conteúdo"}.`;
}

function startEssayTimer() {
  const draft = readStoredJson(essayDraftStorageKey, {});
  if (draft.startedAt) return;
  draft.startedAt = Date.now();
  draft.endsAt = draft.startedAt + 60 * 60_000;
  saveEssayDraft(draft);
  renderEssayPractice();
}

function saveEssayDraft(draft) {
  const editor = mainContent.querySelector("#essayText");
  if (editor) draft.text = editor.value;
  const checklist = [...mainContent.querySelectorAll('[data-essay-competency]:checked')]
    .map(input => input.dataset.essayCompetency);
  draft.competencies = checklist;
  try {
    localStorage.setItem(essayDraftStorageKey, JSON.stringify(draft));
    return true;
  } catch (error) {
    reportStorageFailure("Não foi possível salvar o rascunho da redação.", error);
    return false;
  }
}

function updateEssayTimer() {
  const draft = readStoredJson(essayDraftStorageKey, {});
  const remaining = (draft.endsAt ?? 0) - Date.now();
  const timer = document.getElementById("essayTimer");
  if (timer) timer.textContent = formatTime(remaining);
  if (remaining <= 0) {
    if (essayTimer !== null) clearInterval(essayTimer);
    essayTimer = null;
    finishEssayPractice(true);
  }
}

function renderEssayPractice() {
  const draft = readStoredJson(essayDraftStorageKey, {});
  const finished = Boolean(draft.finishedAt);
  const remaining = Math.max(0, (draft.endsAt ?? 0) - Date.now());
  const prompt = {
    theme: "Desafios para democratizar o acesso à leitura no Brasil",
    texts: [
      "A leitura amplia o acesso à informação, à participação cultural e à circulação de diferentes perspectivas. Bibliotecas públicas, escolas e iniciativas comunitárias podem aproximar livros e leitores.",
      "A disponibilidade de acervos, a acessibilidade para pessoas com deficiência e a diversidade de autores influenciam quem pode escolher o que ler e como participar da vida cultural.",
      "A formação de leitores envolve tanto o contato com obras quanto condições para frequentar espaços de leitura, desenvolver autonomia e compartilhar interpretações."
    ]
  };
  const competencies = [
    "Domínio da modalidade escrita formal da língua portuguesa.",
    "Compreensão do tema e desenvolvimento dentro do gênero dissertativo-argumentativo.",
    "Seleção, organização e interpretação de informações e argumentos.",
    "Uso de mecanismos linguísticos para construir a argumentação.",
    "Proposta de intervenção detalhada e respeitosa aos direitos humanos."
  ];
  mainContent.innerHTML = `
    <div class="crumb"><span>Plano de Estudos 95</span><span>›</span><span class="crumb-current">Redação</span></div>
    <div class="lesson-heading"><div><h1>Prática de redação</h1><p>Proposta original para treino. Organize suas ideias, escreva e revise com as competências do ENEM. Não há correção ou nota automática.</p></div></div>
    <div class="essay-practice">
      <section class="essay-prompt"><h2>Proposta de redação</h2><p><strong>Tema:</strong> ${escapeHtml(prompt.theme)}</p>
        <h3>Textos motivadores</h3>${prompt.texts.map((text, index) => `<p><strong>Texto ${index + 1}.</strong> ${escapeHtml(text)}</p>`).join("")}
        <p>Com base na leitura dos textos motivadores e em seus conhecimentos, redija um texto dissertativo-argumentativo em modalidade escrita formal sobre o tema. Apresente proposta de intervenção que respeite os direitos humanos.</p>
      </section>
      <div class="essay-stats"><strong>Tempo: <span id="essayTimer">${draft.endsAt ? formatTime(remaining) : "60:00"}</span></strong>
        <span>Linhas: <strong id="essayLines">0</strong> (referência: 7 a 30)</span>
        <span>Palavras: <strong id="essayWords">0</strong></span>
      </div>
      <p class="essay-line-guidance" id="essayLineGuidance" aria-live="polite">A contagem considera as quebras de linha do rascunho; confira também a extensão na folha de redação.</p>
      <textarea class="essay-editor" id="essayText" aria-label="Rascunho da redação" placeholder="Escreva sua redação aqui..."${finished ? " disabled" : ""}>${escapeHtml(draft.text ?? "")}</textarea>
      ${finished ? `<p class="practice-summary">Treino finalizado e salvo. A autoavaliação não gera pontuação automática.</p>` : ""}
      <fieldset class="essay-checklist"${finished ? " disabled" : ""}><legend>Autoavaliação · sem nota automática</legend>
        ${competencies.map((text, index) => `<label><input type="checkbox" data-essay-competency="${index + 1}"${draft.competencies?.includes(String(index + 1)) ? " checked" : ""}> Competência ${index + 1}: ${escapeHtml(text)}</label>`).join("")}
      </fieldset>
      <div class="quiz-actions">
        ${!draft.startedAt && !finished ? `<button class="win-button" type="button" data-action="start-essay-timer">Iniciar cronômetro de 60 minutos</button>` : ""}
        ${!finished ? `<button class="win-button primary" type="button" data-action="finish-essay">Salvar redação e finalizar</button>` : ""}
        <button class="win-button" type="button" data-action="clear-essay">Novo rascunho</button>
      </div>
    </div>`;
  updateEssayCounts();
  if (draft.startedAt && !finished) {
    if (essayTimer !== null) clearInterval(essayTimer);
    essayTimer = setInterval(updateEssayTimer, 1000);
  }
}

function updateEssayCounts() {
  const editor = mainContent.querySelector("#essayText");
  if (!editor) return;
  const lines = editor.value ? editor.value.split(/\r\n|\r|\n/).length : 0;
  const words = editor.value.trim() ? editor.value.trim().split(/\s+/).length : 0;
  const lineCount = mainContent.querySelector("#essayLines");
  const wordCount = mainContent.querySelector("#essayWords");
  const guidance = mainContent.querySelector("#essayLineGuidance");
  if (lineCount) lineCount.textContent = String(lines);
  if (wordCount) wordCount.textContent = String(words);
  if (guidance) {
    guidance.textContent = lines === 0
      ? "A proposta oficial considera de 7 a 30 linhas; cada quebra no rascunho conta como uma linha."
      : lines < 7
        ? `Rascunho com ${lines} linha(s); o mínimo de referência é 7.`
        : lines > 30
          ? `Rascunho com ${lines} linhas; o limite de referência é 30.`
          : `Rascunho com ${lines} linhas, dentro da referência de 7 a 30.`;
  }
}

function finishEssayPractice(expired = false) {
  const draft = readStoredJson(essayDraftStorageKey, {});
  const editor = mainContent.querySelector("#essayText");
  if (editor) draft.text = editor.value;
  if (!draft.text?.trim() && !expired) {
    statusText.textContent = "Escreva um rascunho antes de finalizar a prática.";
    return;
  }
  draft.finishedAt = Date.now();
  draft.expired = expired;
  let saved = saveEssayDraft(draft);
  const attempts = getAttempts();
  if (draft.text?.trim()) {
    const lines = draft.text.split(/\r\n|\r|\n/).length;
    const words = draft.text.trim().split(/\s+/).length;
    attempts.push({
      date: draft.finishedAt,
      view: "essay",
      label: "Redação · Democratização do acesso à leitura",
      total: words,
      lines,
      score: null,
      wrongQuestions: []
    });
    try {
      localStorage.setItem(attemptsStorageKey, JSON.stringify(attempts.slice(-50)));
    } catch (error) {
      reportStorageFailure("A redação foi finalizada, mas não foi possível salvar no histórico.", error);
      saved = false;
    }
  }
  if (essayTimer !== null) {
    clearInterval(essayTimer);
    essayTimer = null;
  }
  renderEssayPractice();
  statusText.textContent = !saved
    ? "A redação foi finalizada, mas houve um problema ao salvar. Veja o aviso no navegador e tente novamente."
    : expired
      ? draft.text?.trim() ? "Tempo encerrado. Sua redação foi salva." : "Tempo encerrado. O rascunho foi mantido."
      : "Redação salva. Revise as competências sem atribuir nota automática.";
}
