const examDays = {
  day1: { name: "1º dia", areas: ["languages", "humanities"], minutes: 330 },
  day2: { name: "2º dia", areas: ["nature", "math"], minutes: 300 },
  full: {
    name: "Simulado completo",
    areas: ["languages", "humanities", "nature", "math"],
    minutes: 630,
  },
};
const attemptsStorageKey = "studyplan95.attempts.v1";
const activePracticeStorageKey = "studyplan95.practice.v1";
const essayDraftStorageKey = "studyplan95.essay-draft.v1";
const errorNotebookStorageKey = "studyplan95.errors.v1";

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
    statusText.textContent =
      "Não foi possível salvar neste navegador. Confira o espaço disponível e tente novamente.";
  }
}

function toExamPracticeQuestion(question) {
  const subject = subjects.find((item) => item.id === question.subjectId);
  const partIndex =
    subject?.parts.findIndex(
      (part) => part.title === question.lessonRef.partTitle,
    ) ?? -1;
  return {
    ...question,
    text: question.statement,
    partTitle: question.lessonRef.partTitle,
    partIndex,
    subjectName: subject?.name ?? question.subjectId,
    examSupport: question.support,
    questionRef: { type: "exam", id: question.id },
  };
}

function toLessonPracticeQuestion(question, subject, partIndex, questionIndex) {
  return {
    ...question,
    subjectId: subject.id,
    subjectName: subject.name,
    partTitle: subject.parts[partIndex].title,
    partIntro: subject.parts[partIndex].intro,
    partPoints: subject.parts[partIndex].points,
    partIndex,
    questionIndex,
    questionRef: {
      type: "lesson",
      subjectId: subject.id,
      partIndex,
      questionIndex,
    },
  };
}

function practiceQuestionRef(question) {
  if (question.questionRef) return question.questionRef;
  if (
    question.id &&
    examQuestionBank.some((source) => source.id === question.id)
  ) {
    return { type: "exam", id: question.id };
  }
  if (
    Number.isInteger(question.partIndex) &&
    Number.isInteger(question.questionIndex)
  ) {
    return {
      type: "lesson",
      subjectId: question.subjectId,
      partIndex: question.partIndex,
      questionIndex: question.questionIndex,
    };
  }
  return null;
}

function restorePracticeQuestion(ref, choiceOrder) {
  if (!ref) return null;
  let question;
  if (ref.type === "exam") {
    const source = examQuestionBank.find((item) => item.id === ref.id);
    if (source) question = toExamPracticeQuestion(source);
  } else if (ref.type === "lesson") {
    const subject = subjects.find((item) => item.id === ref.subjectId);
    const part = subject?.parts[ref.partIndex];
    const source = part?.questions?.[ref.questionIndex];
    if (subject && part && source) {
      question = toLessonPracticeQuestion(
        source,
        subject,
        ref.partIndex,
        ref.questionIndex,
      );
    }
  }
  if (!question) return null;
  const validOrder =
    Array.isArray(choiceOrder) &&
    choiceOrder.length === question.choices.length &&
    choiceOrder.every(
      (index) =>
        Number.isInteger(index) &&
        index >= 0 &&
        index < question.choices.length,
    ) &&
    new Set(choiceOrder).size === question.choices.length;
  if (validOrder) {
    question.choices = choiceOrder.map((index) => question.choices[index]);
    question.answer = choiceOrder.indexOf(question.answer);
    question.choiceOrder = choiceOrder;
  }
  return question;
}

function loadSavedPracticeSession() {
  const saved = readStoredJson(activePracticeStorageKey, null);
  if (
    !saved ||
    !["exams", "quizzes", "review"].includes(saved.view) ||
    !Array.isArray(saved.answers)
  )
    return null;
  if (Array.isArray(saved.questionRefs)) {
    saved.questions = saved.questionRefs
      .map((item) => {
        const question = restorePracticeQuestion(item.ref, item.choiceOrder);
        return question ? { ...question, ...item.metadata } : null;
      })
      .filter(Boolean);
    saved.sections = (saved.sections ?? []).map((section) => ({
      id: section.id,
      name: section.name,
      questions: section.questionIndexes
        .map((index) => saved.questions[index])
        .filter(Boolean),
    }));
  } else if (Array.isArray(saved.questions)) {
    saved.questions = saved.questions.map((question) => {
      const ref = practiceQuestionRef(question);
      if (!ref) return question;
      question.questionRef = ref;
      if (!Array.isArray(question.choiceOrder)) {
        const source = restorePracticeQuestion(ref);
        const order = question.choices.map(
          (choice) => source?.choices.indexOf(choice) ?? -1,
        );
        if (
          order?.every((index) => index >= 0) &&
          order.length === question.choices.length
        ) {
          question.choiceOrder = order;
        }
      }
      return question;
    });
  }
  if (
    !Array.isArray(saved.questions) ||
    saved.questions.length !== saved.answers.length
  )
    return null;
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
    const { questions, sections, ...sessionData } = practiceSession;
    localStorage.setItem(
      activePracticeStorageKey,
      JSON.stringify({
        ...sessionData,
        questionRefs: questions.map((question) => ({
          ref: question.questionRef,
          choiceOrder: question.choiceOrder,
          metadata: {
            examAreaId: question.examAreaId,
            examAreaName: question.examAreaName,
            examNumber: question.examNumber,
            sessionIndex: question.sessionIndex,
          },
        })),
        sections: sections.map((section) => ({
          id: section.id,
          name: section.name,
          questionIndexes: section.questions.map(
            (question) => question.sessionIndex,
          ),
        })),
      }),
    );
  } catch (error) {
    reportStorageFailure(
      "Não foi possível salvar a prática em andamento.",
      error,
    );
  }
}

function getAttempts() {
  const attempts = readStoredJson(attemptsStorageKey, []);
  return Array.isArray(attempts) ? attempts : [];
}

function getErrorNotebook() {
  const book = readStoredJson(errorNotebookStorageKey, {});
  const validBook =
    book && typeof book === "object" && !Array.isArray(book) ? book : {};
  if (Object.keys(validBook).length) return validBook;
  for (const attempt of getAttempts()) {
    for (const item of attempt.wrongQuestions ?? []) {
      const question = item.question;
      const ref = item.ref ?? (question ? practiceQuestionRef(question) : null);
      if (!ref) continue;
      const key = JSON.stringify(ref);
      validBook[key] ??= {
        ref,
        streak: 0,
        times: 1,
        lastWrongAt: attempt.date ?? Date.now(),
      };
    }
  }
  if (Object.keys(validBook).length) {
    try {
      localStorage.setItem(errorNotebookStorageKey, JSON.stringify(validBook));
    } catch (error) {
      reportStorageFailure(
        "Não foi possível migrar o caderno de erros salvo.",
        error,
      );
    }
  }
  return validBook;
}

function updateErrorNotebook(session) {
  const book = getErrorNotebook();
  session.questions.forEach((question, index) => {
    const ref = question.questionRef;
    if (!ref) return;
    const key = JSON.stringify(ref);
    if (session.answers[index] === question.answer) {
      if (book[key] && ++book[key].streak >= 2) delete book[key];
    } else {
      book[key] = {
        ref,
        streak: 0,
        times: (book[key]?.times ?? 0) + 1,
        lastWrongAt: Date.now(),
      };
    }
  });
  localStorage.setItem(errorNotebookStorageKey, JSON.stringify(book));
}

function saveAttempt(session) {
  const attempts = getAttempts();
  updateErrorNotebook(session);
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
      .map((question, index) =>
        session.answers[index] === question.answer
          ? null
          : {
              ref: question.questionRef,
              choiceOrder: question.choiceOrder,
              selectedAnswer: session.answers[index],
            },
      )
      .filter(Boolean),
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
    const stats = (topics[key] ??= { correct: 0, wrong: 0, blank: 0 });
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
        ${
          isExam
            ? `<div class="form-row">
          <label for="practiceArea">Dia ou caderno</label>
          <select id="practiceArea">
            <option value="full">Simulado completo · 1º e 2º dia</option>
            <option value="day1">1º dia · Linguagens e Humanas · 5h30</option>
            <option value="day2">2º dia · Natureza e Matemática · 5h</option>
            ${examKnowledgeAreas
              .filter((area) => area.id !== "essay")
              .map(
                (area) =>
                  `<option value="area:${escapeHtml(area.id)}">${escapeHtml(area.name)} · caderno de treino</option>`,
              )
              .join("")}
          </select>
        </div>`
            : ""
        }
        <div class="form-row">
          <label for="practiceSubject">Matéria</label>
          <select id="practiceSubject">
            <option value="all">Todas as matérias</option>
            ${subjects
              .filter((subject) => subject.id !== "essay")
              .map(
                (subject) =>
                  `<option value="${escapeHtml(subject.id)}">${escapeHtml(subject.name)}</option>`,
              )
              .join("")}
          </select>
        </div>
        ${
          isExam
            ? `<div class="form-row">
          <label for="foreignLanguage">Língua estrangeira da prova</label>
          <select id="foreignLanguage">
            <option value="english">Inglês</option>
            <option value="spanish">Espanhol</option>
          </select>
        </div>`
            : ""
        }
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
      <p>${isExam ? `O ENEM oficial tem 45 questões por área. Este banco autoral tem ${examQuestionBank.length} questões por enquanto; a tela informa quantas há em cada caderno, sem completar a prova com questões repetidas. O cronômetro é proporcional ao número de questões disponíveis e não representa a duração de uma prova oficial completa.` : `O quiz terá até ${questionCount} questões.`} A redação é praticada separadamente.</p>
    </div>`;
  updatePracticeAvailability();
}

function getPracticeQuestionPool() {
  const subjectId =
    mainContent.querySelector("#practiceSubject")?.value ?? "all";
  const difficulty =
    mainContent.querySelector("#practiceDifficulty")?.value ?? "all";
  const selectedArea =
    mainContent.querySelector("#practiceArea")?.value ?? "all";
  const foreignLanguage =
    mainContent.querySelector("#foreignLanguage")?.value ?? "english";
  if (activeView === "exams") {
    return examQuestionBank.flatMap((question) => {
      if (subjectId !== "all" && subjectId !== question.subjectId) return [];
      if (difficulty !== "all" && question.difficulty !== difficulty) return [];
      if (question.subjectId === "english" && foreignLanguage !== "english")
        return [];
      if (question.subjectId === "spanish" && foreignLanguage !== "spanish")
        return [];
      if (
        selectedArea.startsWith("area:") &&
        !examKnowledgeAreas
          .find((area) => area.id === selectedArea.slice(5))
          ?.subjectIds.includes(question.subjectId)
      )
        return [];
      if (
        selectedArea === "day1" &&
        !examDays.day1.areas.some((areaId) =>
          examKnowledgeAreas
            .find((area) => area.id === areaId)
            ?.subjectIds.includes(question.subjectId),
        )
      )
        return [];
      if (
        selectedArea === "day2" &&
        !examDays.day2.areas.some((areaId) =>
          examKnowledgeAreas
            .find((area) => area.id === areaId)
            ?.subjectIds.includes(question.subjectId),
        )
      )
        return [];
      return [toExamPracticeQuestion(question)];
    });
  }
  return subjects.flatMap((subject) => {
    if (subject.id === "essay") return [];
    if (subjectId !== "all" && subject.id !== subjectId) return [];
    return subject.parts.flatMap((part, partIndex) => {
      const partDifficulty =
        part.difficulty ?? difficultyForIndex(partIndex, subject.parts.length);
      if (difficulty !== "all" && partDifficulty !== difficulty) return [];
      return (Array.isArray(part.questions) ? part.questions : []).map(
        (question, questionIndex) =>
          toLessonPracticeQuestion(question, subject, partIndex, questionIndex),
      );
    });
  });
}

function renderExamChart(chart) {
  const dataMin = Math.min(0, ...chart.values);
  const dataMax = Math.max(0, ...chart.values);
  const rawStep = (dataMax - dataMin) / 4 || 1;
  const magnitude = 10 ** Math.floor(Math.log10(rawStep));
  const normalizedStep = rawStep / magnitude;
  const step =
    (normalizedStep <= 1
      ? 1
      : normalizedStep <= 2
        ? 2
        : normalizedStep <= 5
          ? 5
          : 10) * magnitude;
  const axisMin = Math.floor(dataMin / step) * step;
  const axisMax = Math.ceil(dataMax / step) * step || 1;
  const chartTop = 30;
  const chartBottom = 230;
  const chartHeight = chartBottom - chartTop;
  const axisRange = axisMax - axisMin || 1;
  const zeroY = chartBottom - (chartHeight * (0 - axisMin)) / axisRange;
  const barWidth = Math.min(56, (484 / chart.labels.length) * 0.7);
  const positions = chart.labels.map(
    (_, index) => 86 + ((index + 0.5) * 484) / chart.labels.length,
  );
  const tickCount = Math.max(1, Math.round(axisRange / step));
  const grid = Array.from({ length: tickCount + 1 }, (_, index) => {
    const value = axisMax - step * index;
    const y = chartTop + (chartHeight * index) / tickCount;
    return `<line x1="66" y1="${y}" x2="570" y2="${y}" stroke="#bbb" stroke-dasharray="3 3"/>
      <text x="58" y="${y + 4}" text-anchor="end" font-size="10" fill="#333">${escapeHtml(Number(value.toPrecision(4)).toLocaleString("pt-BR"))}</text>`;
  }).join("");
  const bars = chart.values
    .map((value, index) => {
      const valueY =
        chartBottom - (chartHeight * (value - axisMin)) / axisRange;
      const height = Math.abs(zeroY - valueY);
      const x = positions[index] - barWidth / 2;
      const y = Math.min(zeroY, valueY);
      return `<rect x="${x}" y="${y}" width="${barWidth}" height="${height}" fill="#316ac5" stroke="#173d78"/>
      <text x="${positions[index]}" y="${value >= 0 ? Math.max(y - 6, 15) : Math.min(y + height + 14, 244)}" text-anchor="middle" font-size="11" fill="#222">${escapeHtml(value.toLocaleString("pt-BR"))}</text>
      <text x="${positions[index]}" y="250" text-anchor="middle" font-size="10" fill="#222">${escapeHtml(chart.labels[index])}</text>`;
    })
    .join("");
  const line =
    chart.type === "line"
      ? `<polyline points="${chart.values.map((value, index) => `${positions[index]},${chartBottom - (chartHeight * (value - axisMin)) / axisRange}`).join(" ")}" fill="none" stroke="#173d78" stroke-width="3"/>
      ${chart.values.map((value, index) => `<circle cx="${positions[index]}" cy="${chartBottom - (chartHeight * (value - axisMin)) / axisRange}" r="5" fill="#316ac5" stroke="#173d78"/>`).join("")}`
      : bars;
  const rows = chart.labels
    .map(
      (label, index) =>
        `<tr><th scope="row">${escapeHtml(label)}</th><td>${chart.values[index]} ${escapeHtml(chart.unit)}</td></tr>`,
    )
    .join("");
  return `<figure class="exam-graphic">
    <h4>${escapeHtml(chart.title)}</h4>
    <p>${escapeHtml(chart.description)}</p>
    <svg viewBox="0 0 620 270" role="img" aria-label="${escapeHtml(`${chart.title}: ${chart.labels.map((label, index) => `${label}, ${chart.values[index]} ${chart.unit}`).join("; ")}`)}">
      ${grid}<line x1="66" y1="${zeroY}" x2="570" y2="${zeroY}" stroke="#333"/>
      ${line}<text x="12" y="18" font-size="10" fill="#333">${escapeHtml(chart.unit)}</text>
    </svg>
    <div class="table-scroll"><table><caption class="sr-only">${escapeHtml(chart.title)}: dados em tabela</caption><tbody>${rows}</tbody></table></div>
    <figcaption>${escapeHtml(chart.source ?? "Dados hipotéticos, elaborados para fins didáticos; não representam estatísticas oficiais.")}</figcaption>
  </figure>`;
}

function renderSupportTable(support) {
  const headers = Array.isArray(support.headers) ? support.headers : [];
  const rows = Array.isArray(support.rows) ? support.rows : [];
  return `<figure class="exam-graphic">
    ${support.title ? `<h4>${escapeHtml(support.title)}</h4>` : ""}
    ${support.description ? `<p>${escapeHtml(support.description)}</p>` : ""}
    <div class="table-scroll"><table>
      ${support.caption ? `<caption>${escapeHtml(support.caption)}</caption>` : ""}
      ${headers.length ? `<thead><tr>${headers.map((header) => `<th scope="col">${escapeHtml(header)}</th>`).join("")}</tr></thead>` : ""}
      <tbody>${rows.map((row) => `<tr>${row.map((cell, index) => `<${index === 0 && headers.length ? 'th scope="row"' : "td"}>${escapeHtml(cell)}</${index === 0 && headers.length ? "th" : "td"}>`).join("")}</tr>`).join("")}</tbody>
    </table></div>
    ${support.source ? `<figcaption>${escapeHtml(support.source)}</figcaption>` : ""}
  </figure>`;
}

function renderStaticSvg(support) {
  const allowedTags = new Set([
    "rect",
    "line",
    "circle",
    "polyline",
    "polygon",
    "path",
    "text",
  ]);
  const allowedAttributes = new Set([
    "x",
    "y",
    "x1",
    "x2",
    "y1",
    "y2",
    "cx",
    "cy",
    "r",
    "width",
    "height",
    "fill",
    "stroke",
    "stroke-width",
    "points",
    "d",
    "font-size",
    "text-anchor",
  ]);
  const elements = (support.elements ?? [])
    .filter((item) => allowedTags.has(item.tag))
    .map((item) => {
      const attributes = Object.entries(item.attributes ?? {})
        .filter(([name]) => allowedAttributes.has(name))
        .filter(([name, value]) => {
          const attribute = String(value);
          if (name === "fill" || name === "stroke") {
            return /^(#[0-9a-f]{3,8}|[a-z]{3,20}|none|currentColor|transparent)$/i.test(
              attribute,
            );
          }
          if (name === "text-anchor")
            return /^(start|middle|end)$/.test(attribute);
          if (name === "points") return /^[-\d.,\s]+$/.test(attribute);
          if (name === "d")
            return /^[MmLlHhVvCcSsQqTtAaZz0-9.,\s+-]+$/.test(attribute);
          return /^-?\d+(?:\.\d+)?$/.test(attribute);
        })
        .map(([name, value]) => `${name}="${escapeHtml(String(value))}"`)
        .join(" ");
      const content = item.tag === "text" ? escapeHtml(item.text ?? "") : "";
      return `<${item.tag}${attributes ? ` ${attributes}` : ""}>${content}</${item.tag}>`;
    })
    .join("");
  return `<figure class="exam-graphic">
    ${support.title ? `<h4>${escapeHtml(support.title)}</h4>` : ""}
    ${support.description ? `<p>${escapeHtml(support.description)}</p>` : ""}
    <svg viewBox="${escapeHtml(support.viewBox ?? "0 0 600 300")}" role="img" aria-label="${escapeHtml(support.title ?? "Figura de apoio")}">${elements}</svg>
    ${support.source ? `<figcaption>${escapeHtml(support.source)}</figcaption>` : ""}
  </figure>`;
}

function renderExamSupport(question) {
  const supports = Array.isArray(question.examSupport)
    ? question.examSupport
    : [];
  return supports
    .map((support, index) => {
      if (support.type === "chart" || support.type === "line") {
        return renderExamChart({
          ...support.chart,
          type: support.type,
          source: support.source,
        });
      }
      if (support.type === "table") return renderSupportTable(support);
      if (support.type === "svg") return renderStaticSvg(support);
      return `<article class="exam-stimulus">
      <h4>Texto de apoio${supports.filter((item) => item.type === "text").length > 1 ? ` ${index + 1}` : ""}</h4>
      <p>${escapeHtml(support.content)}</p>
      ${support.source ? `<p><small>${escapeHtml(support.source)}</small></p>` : ""}
    </article>`;
    })
    .join("");
}

function getSelectedExamAreas() {
  const subjectId =
    mainContent.querySelector("#practiceSubject")?.value ?? "all";
  if (subjectId !== "all") {
    return examKnowledgeAreas.filter(
      (area) => area.id !== "essay" && area.subjectIds.includes(subjectId),
    );
  }
  const areaId = mainContent.querySelector("#practiceArea")?.value ?? "all";
  const areaIds = areaId.startsWith("area:")
    ? [areaId.slice(5)]
    : (examDays[areaId]?.areas ?? examDays.full.areas);
  return areaIds
    .map((id) => examKnowledgeAreas.find((area) => area.id === id))
    .filter(Boolean);
}

function shuffleList(items) {
  return items
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}

function shuffleChoices(question) {
  if (question.keepOrder) {
    return {
      ...question,
      choiceOrder: question.choices.map((_, index) => index),
    };
  }
  const order = shuffleList(question.choices.map((_, index) => index));
  return {
    ...question,
    choices: order.map((index) => question.choices[index]),
    answer: order.indexOf(question.answer),
    choiceOrder: order,
  };
}

function getExamDurationMinutes(questionCount) {
  return Math.max(10, Math.round(questionCount * 3));
}

function updatePracticeAvailability() {
  const summary = mainContent.querySelector("#practiceAvailability");
  if (!summary) return;
  const pool = getPracticeQuestionPool();
  if (activeView === "exams") {
    const areas = getSelectedExamAreas();
    const sectionCounts = areas
      .map(
        (area) =>
          pool.filter((question) =>
            area.subjectIds.includes(question.subjectId),
          ).length,
      )
      .filter((areaCount) => areaCount > 0)
      .map((areaCount) => Math.min(45, areaCount));
    const count = sectionCounts.reduce(
      (sum, sectionCount) => sum + sectionCount,
      0,
    );
    const cadernoCount = sectionCounts.length;
    const cadernoLabel =
      cadernoCount === 1
        ? "1 caderno de área"
        : `${cadernoCount} cadernos de área`;
    const timerMinutes = getExamDurationMinutes(count);
    const duration = formatTime(timerMinutes * 60000);
    summary.textContent = count
      ? `${count} questões autorais disponíveis em ${cadernoLabel}. Tempo de referência proporcional ao banco atual: ${duration} (cerca de 3 minutos por questão). O caderno oficial tem 45 questões por área.`
      : "Não há questões para esta seleção. Escolha outra matéria ou dificuldade.";
  } else {
    const count = pool.length;
    summary.textContent = count
      ? `${count} questões disponíveis. ${Math.min(10, count)} serão selecionadas para este quiz.`
      : "Não há questões para esta seleção. Escolha outra matéria ou dificuldade.";
  }
  const startButton = mainContent.querySelector(
    '[data-action="start-practice"]',
  );
  if (startButton)
    startButton.disabled =
      activeView === "exams"
        ? !getSelectedExamAreas().some((area) =>
            pool.some((question) =>
              area.subjectIds.includes(question.subjectId),
            ),
          )
        : pool.length === 0;
}

function renderPracticeQuestion(question, index, isExam, checked) {
  const examNumber = question.examNumber ?? index + 1;
  const hasSupport = Array.isArray(question.examSupport);
  const showLetters = isExam || hasSupport;
  return `<fieldset class="practice-question${isExam ? " exam-question" : ""}" data-practice-question="${index}">
    <legend>${isExam ? `Questão ${String(examNumber).padStart(2, "0")}` : `Questão ${index + 1}`}</legend>
    <p class="question-source">${escapeHtml(question.subjectName)} · ${escapeHtml(question.topic ?? question.partTitle)}</p>
    ${hasSupport ? renderExamSupport(question) : ""}
    <h3>${escapeHtml(question.statement ?? question.text)}</h3>
    <div class="answers">${question.choices
      .map((choice, choiceIndex) => {
        const selected = practiceSession.answers[index] === choiceIndex;
        const correct = checked && choiceIndex === question.answer;
        const incorrect =
          checked && selected && choiceIndex !== question.answer;
        return `<label class="answer${correct ? " correct" : ""}${incorrect ? " incorrect" : ""}">
        <input type="radio" name="practice-${index}" value="${choiceIndex}"${selected ? " checked" : ""}${checked ? " disabled" : ""}>
        <span><span class="answer-letter">${showLetters ? `${String.fromCharCode(65 + choiceIndex)})` : ""}</span>${escapeHtml(choice)}</span>
      </label>`;
      })
      .join("")}</div>
    ${isExam && !checked ? `<button class="win-button answer-flag" type="button" data-flag-question="${index}" aria-pressed="${practiceSession.flagged.includes(index)}">${practiceSession.flagged.includes(index) ? "🚩 Desmarcar revisão" : "🚩 Marcar para revisar"}</button>` : ""}
    ${
      checked
        ? `<div class="exam-review">
      <h4>${practiceSession.answers[index] === question.answer ? "Resposta correta" : practiceSession.answers[index] === null ? "Questão em branco" : "Revise esta questão"}</h4>
      <p><strong>Gabarito:</strong> ${String.fromCharCode(65 + question.answer)}) ${escapeHtml(question.choices[question.answer])}</p>
      <p>${escapeHtml(question.explanation ?? "Consulte o conteúdo relacionado para revisar este conceito.")}</p>
      ${question.lessonRef ? `<button class="win-button" type="button" data-action="review-lesson" data-question-index="${index}">Revisar esta aula</button>` : ""}
    </div>`
        : ""
    }
  </fieldset>`;
}

function formatTime(milliseconds) {
  const seconds = Math.floor(Math.max(0, milliseconds) / 1000);
  return [
    Math.floor(seconds / 3600),
    Math.floor((seconds % 3600) / 60),
    seconds % 60,
  ]
    .map((value) => String(value).padStart(2, "0"))
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
    button.classList.toggle(
      "answered",
      practiceSession.answers[index] !== null,
    );
    button.classList.toggle("flagged", practiceSession.flagged.includes(index));
    button.setAttribute(
      "aria-label",
      `Questão ${index + 1}: ${
        practiceSession.flagged.includes(index)
          ? "marcada para revisar"
          : practiceSession.answers[index] !== null
            ? "respondida"
            : "em branco"
      }`,
    );
  });
}

function renderAttemptResults(session) {
  const topics = summarizeAttempt(session);
  const rows = Object.entries(topics)
    .map(([topic, stats]) => {
      const total = stats.correct + stats.wrong + stats.blank;
      const percentage = total ? Math.round((stats.correct * 100) / total) : 0;
      return `<tr><th scope="row">${escapeHtml(topic)}</th><td>${stats.correct}</td><td>${stats.wrong}</td><td>${stats.blank}</td><td>${percentage}%</td></tr>`;
    })
    .join("");
  return `<div class="table-scroll"><table class="exam-result-table">
    <caption class="sr-only">Desempenho por matéria e tópico</caption>
    <thead><tr><th>Matéria · tópico</th><th>Acertos</th><th>Erros</th><th>Em branco</th><th>Acerto</th></tr></thead>
    <tbody>${rows}</tbody>
  </table></div><p>O resultado mostra acertos e tópicos para revisar. Não é uma nota ENEM: a TRI não pode ser estimada por este simulado.</p>`;
}

function renderPracticeSession() {
  const session = practiceSession;
  const isExam = session.view === "exams";
  const isReview = session.view === "review";
  const title = isExam
    ? "Prova em andamento"
    : isReview
      ? "Revisão de erros"
      : "Quiz em andamento";
  const checked = session.score !== null;
  const questionsHtml = isExam
    ? `<div class="exam-booklet">
        <header class="exam-booklet-header"><h2>Caderno de questões · simulado</h2><p>Questões originais elaboradas a partir do conteúdo do seu plano de estudos.</p></header>
        ${session.sections
          .map(
            (section) => `<section class="exam-area">
          <h2 class="exam-area-heading">${escapeHtml(section.name)} · questões ${String(section.questions[0]?.examNumber ?? 0).padStart(2, "0")} a ${String(section.questions[section.questions.length - 1]?.examNumber ?? 0).padStart(2, "0")}</h2>
          ${section.questions.map((question) => renderPracticeQuestion(question, question.sessionIndex, true, checked)).join("")}
        </section>`,
          )
          .join("")}
      </div>`
    : `<div class="practice-questions">${session.questions
        .map((question, index) =>
          renderPracticeQuestion(question, index, false, checked),
        )
        .join("")}</div>`;
  const questionNavigation =
    isExam && !checked
      ? `<nav class="exam-toolbar" aria-label="Painel de questões">
        <strong>Questões</strong><span class="exam-timer" id="examTimer" role="timer" aria-live="off">${formatTime(session.endsAt - Date.now())}</span>
      <small>Verde: respondida · amarelo: revisar · cinza: em branco</small>
      <div class="question-navigator">${session.questions
        .map(
          (question, index) => `
        <button class="question-nav-button${session.answers[index] !== null ? " answered" : ""}${session.flagged.includes(index) ? " flagged" : ""}" type="button" data-question-jump="${index}" aria-label="Questão ${question.examNumber} · ${escapeHtml(question.examAreaName)}">
            ${isExam ? question.examNumber : index + 1}
          </button>`,
        )
        .join("")}</div>
        <button class="win-button" type="button" data-action="focus-mode">${session.focusMode ? "Sair do modo foco" : "Modo foco"}</button>
      </nav>`
      : "";
  mainContent.innerHTML = `
    <div class="crumb"><span>Plano de Estudos 95</span><span>›</span><span class="crumb-current">${title}</span></div>
    <div class="lesson-heading"><div><h1>${title}</h1><p>${escapeHtml(session.label)}</p></div></div>
    ${checked ? `<div class="practice-result" role="status">Resultado: ${session.score} de ${session.questions.length} (${Math.round((session.score * 100) / session.questions.length)}%) · ${session.answers.filter((answer) => answer === null).length} em branco · tempo ${formatTime(session.elapsedMs ?? 0)}.</div>${renderAttemptResults(session)}` : `<p class="practice-summary">${session.questions.length} questões. É possível deixar itens em branco e voltar a eles pelo painel${isExam ? ` · tempo disponível: ${formatTime(session.endsAt - Date.now())}` : ""}.</p>`}
    ${isExam ? `<p class="exam-instructions">Questões autorais com textos de apoio e gráficos. Marque itens para revisar e use o cartão-resposta para navegar. Textos e dados são originais ou hipotéticos; este material não é uma prova oficial.</p>` : ""}
    ${questionNavigation}
    ${questionsHtml}
    <div class="quiz-actions">
      ${isExam ? `<button class="win-button" type="button" data-action="print-practice">Imprimir caderno</button>` : ""}
      ${
        checked
          ? `<button class="win-button primary" type="button" data-action="${isReview ? "review-dashboard" : "new-practice"}">${isReview ? "Voltar à revisão" : isExam ? "Nova prova" : "Novo quiz"}</button>`
          : `<button class="win-button primary" type="button" data-action="submit-practice">Conferir resultado</button>`
      }
      <button class="win-button" type="button" data-action="practice-home">Voltar</button>
    </div>`;
  document.body.classList.toggle(
    "focus-mode",
    isExam && session.focusMode === true && !checked,
  );
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
    const areaOffsets = { languages: 0, humanities: 45, nature: 90, math: 135 };
    sections = getSelectedExamAreas().flatMap((area) => {
      const areaPool = pool.filter((question) =>
        area.subjectIds.includes(question.subjectId),
      );
      if (!areaPool.length) return [];
      const selectedQuestions = shuffleList(areaPool)
        .slice(0, 45)
        .map((question, index) => ({
          ...shuffleChoices(question),
          examAreaId: area.id,
          examAreaName: area.name,
          examNumber: (areaOffsets[area.id] ?? 0) + index + 1,
        }));
      return [{ id: area.id, name: area.name, questions: selectedQuestions }];
    });
    let sessionIndex = 0;
    for (const section of sections) {
      for (const question of section.questions)
        question.sessionIndex = sessionIndex++;
    }
    questions = sections.flatMap((section) => section.questions);
  } else {
    questions = shuffleList(pool).slice(0, 10).map(shuffleChoices);
  }
  if (!questions.length) {
    updatePracticeAvailability();
    return;
  }
  const selectedArea =
    mainContent.querySelector("#practiceArea")?.value ?? "full";
  const areaName = getSelectedExamAreas()
    .map((area) => area.name)
    .join(" + ");
  const subjectName =
    selectedSubject !== "all"
      ? (subjects.find((subject) => subject.id === selectedSubject)?.name ??
        "Matéria")
      : isExam
        ? (examDays[selectedArea]?.name ?? areaName)
        : "Todas as matérias";
  const difficulty = mainContent.querySelector("#practiceDifficulty").value;
  const difficultyName =
    difficulty === "all"
      ? "todas as dificuldades"
      : difficultyNames[difficulty].toLowerCase();
  const durationMinutes = getExamDurationMinutes(questions.length);
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
    focusMode: false,
  };
  saveActivePracticeSession();
  renderPracticeSession();
}

function startErrorReview() {
  const notebook = getErrorNotebook();
  const wrongQuestions = Object.values(notebook)
    .map((item) => restorePracticeQuestion(item.ref))
    .filter(Boolean);
  const pool = shuffleList(wrongQuestions).slice(0, 10);
  if (!pool.length) {
    statusText.textContent =
      "Seu caderno de erros está vazio. Conclua uma prática e revise as questões erradas.";
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
    focusMode: false,
  };
  saveActivePracticeSession();
  renderPracticeSession();
}

function submitPractice(force = false) {
  if (!practiceSession) return;
  const blanks = practiceSession.answers.filter(
    (answer) => answer === null,
  ).length;
  if (
    !force &&
    blanks > 0 &&
    !confirm(
      `Você deixou ${blanks} questão(ões) em branco. Deseja conferir mesmo assim?`,
    )
  ) {
    return;
  }
  practiceSession.score = practiceSession.questions.reduce(
    (score, question, index) =>
      score + (practiceSession.answers[index] === question.answer ? 1 : 0),
    0,
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
    statusText.textContent =
      "Prática concluída, mas não foi possível salvar o histórico neste navegador.";
  }
  renderPracticeSession();
  if (
    statusText.textContent !==
    "Prática concluída, mas não foi possível salvar o histórico neste navegador."
  ) {
    statusText.textContent = `Prática concluída: ${practiceSession.score} de ${practiceSession.questions.length}.`;
  }
}

function renderReviewDashboard() {
  const attempts = getAttempts().slice().reverse();
  const errorNotebook = getErrorNotebook();
  const objectiveAttempts = attempts.filter(
    (attempt) => Number.isFinite(attempt.score) && attempt.total > 0,
  );
  const wrongCount = Object.keys(errorNotebook).length;
  const totalAnswers = objectiveAttempts.reduce(
    (sum, attempt) => sum + attempt.total,
    0,
  );
  const totalCorrect = objectiveAttempts.reduce(
    (sum, attempt) => sum + attempt.score,
    0,
  );
  const rows = attempts
    .slice(0, 20)
    .map((attempt) => {
      const date = new Date(attempt.date).toLocaleString("pt-BR");
      const result = Number.isFinite(attempt.score)
        ? `${attempt.score}/${attempt.total} (${Math.round((attempt.score * 100) / attempt.total)}%)`
        : `Redação · ${attempt.lines ?? 0} linhas estimadas / ${attempt.total ?? 0} palavras · sem nota automática`;
      return `<tr><td>${escapeHtml(date)}</td><td>${escapeHtml(attempt.label ?? "Prática")}</td><td>${result}</td></tr>`;
    })
    .join("");
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
  const weeklyRows = [...weeklyTotals.entries()]
    .slice(0, 8)
    .map(
      ([week, stats]) =>
        `<tr><th scope="row">Semana de ${escapeHtml(week)}</th><td>${stats.correct}/${stats.total}</td><td>${Math.round((stats.correct * 100) / stats.total)}%</td></tr>`,
    )
    .join("");
  const essayHistory = attempts.filter(
    (attempt) => attempt.view === "essay" && attempt.essayText,
  );
  mainContent.innerHTML = `
    <div class="crumb"><span>Plano de Estudos 95</span><span>›</span><span class="crumb-current">Revisão</span></div>
    <div class="lesson-heading"><div><h1>Revisão e evolução</h1><p>Use seus resultados para escolher o próximo assunto. O desempenho mostra acertos, não uma estimativa de nota TRI.</p></div></div>
    <div class="review-summary">
      <div class="review-card"><strong>Práticas concluídas</strong>${attempts.length}</div>
      <div class="review-card"><strong>Acertos objetivos</strong>${totalCorrect} de ${totalAnswers}${totalAnswers ? ` · ${Math.round((totalCorrect * 100) / totalAnswers)}%` : ""}</div>
      <div class="review-card"><strong>Questões no caderno de erros</strong>${wrongCount}</div>
    </div>
    <button class="win-button primary" type="button" data-action="start-errors"${wrongCount ? "" : " disabled"}>Revisar questões erradas</button>
    ${weeklyRows ? `<h2>Evolução semanal</h2><div class="table-scroll"><table class="exam-result-table"><thead><tr><th>Período</th><th>Acertos</th><th>Percentual</th></tr></thead><tbody>${weeklyRows}</tbody></table></div>` : ""}
    <h2>Histórico recente</h2>
    ${attempts.length ? `<div class="table-scroll"><table class="exam-result-table"><thead><tr><th>Data</th><th>Prática</th><th>Resultado</th></tr></thead><tbody>${rows}</tbody></table></div>` : `<p>Ainda não há práticas concluídas. Faça um quiz ou prova para começar seu histórico.</p>`}
    ${
      essayHistory.length
        ? `<h2>Redações anteriores</h2>${essayHistory
            .map(
              (attempt) => `<details class="essay-history">
      <summary>${escapeHtml(new Date(attempt.date).toLocaleDateString("pt-BR"))} · ${escapeHtml(attempt.label)} · ${attempt.total} palavras</summary>
      <p>${escapeHtml(attempt.essayText)}</p>
      <p>Linhas estimadas: ${attempt.lines ?? 0} · Autoavaliação salva: ${Object.keys(attempt.competencies ?? {}).length ? "sim" : "não"}</p>
    </details>`,
            )
            .join("")}`
        : ""
    }
    <h2>Erros recentes</h2>
    ${
      wrongCount
        ? Object.values(errorNotebook)
            .sort((a, b) => b.lastWrongAt - a.lastWrongAt)
            .slice(0, 10)
            .map((item) => {
              const question = restorePracticeQuestion(item.ref);
              if (!question) return "";
              return `<article class="practice-error"><p><strong>${escapeHtml(question.subjectName ?? question.subjectId)} · ${escapeHtml(question.topic ?? question.partTitle)}</strong></p>
        <p>${escapeHtml(question.statement ?? question.text)}</p>
        <p>Errada ${item.times} ${item.times === 1 ? "vez" : "vezes"} · sequência correta: ${item.streak ?? 0}</p>
        <button class="win-button" type="button" data-action="open-review-lesson" data-subject-id="${escapeHtml(question.lessonRef?.subjectId ?? question.subjectId)}" data-part-title="${escapeHtml(question.lessonRef?.partTitle ?? question.partTitle)}">Revisar esta aula</button>
      </article>`;
            })
            .join("")
        : `<p>Quando você errar ou deixar uma questão em branco, ela aparecerá aqui.</p>`
    }`;
}

function openLessonFromPractice(index) {
  const question = practiceSession?.questions[index];
  if (!question) return;
  openLessonReference(
    question.lessonRef?.subjectId ?? question.subjectId,
    question.lessonRef?.partTitle ?? question.partTitle,
  );
}

function openLessonReference(subjectId, partTitle) {
  const subject = subjects.find((item) => item.id === subjectId);
  if (!subject) {
    statusText.textContent =
      "A matéria relacionada a esta questão não está disponível no plano.";
    return;
  }
  activeSubjectId = subject.id;
  const partIndex = subject.parts.findIndex((part) => part.title === partTitle);
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
  const competencyInputs = [
    ...mainContent.querySelectorAll("[data-essay-competency]"),
  ];
  const ratings = competencyInputs
    .map((input) => [input.dataset.essayCompetency, input.value])
    .filter(([, value]) => value !== "");
  if (competencyInputs.length) draft.competencies = Object.fromEntries(ratings);
  try {
    localStorage.setItem(essayDraftStorageKey, JSON.stringify(draft));
    return true;
  } catch (error) {
    reportStorageFailure(
      "Não foi possível salvar o rascunho da redação.",
      error,
    );
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
  const prompts = [
    {
      id: "reading",
      theme: "Desafios para democratizar o acesso à leitura no Brasil",
      texts: [
        "A leitura amplia o acesso à informação, à participação cultural e à circulação de diferentes perspectivas. Bibliotecas públicas, escolas e iniciativas comunitárias podem aproximar livros e leitores.",
        "A disponibilidade de acervos, a acessibilidade para pessoas com deficiência e a diversidade de autores influenciam quem pode escolher o que ler e como participar da vida cultural.",
        "A formação de leitores envolve tanto o contato com obras quanto condições para frequentar espaços de leitura, desenvolver autonomia e compartilhar interpretações.",
      ],
    },
    {
      id: "climate",
      theme:
        "Caminhos para ampliar a segurança hídrica nas cidades brasileiras",
      texts: [
        "A segurança hídrica depende da disponibilidade de água em quantidade e qualidade adequadas, além de infraestrutura para captação, tratamento e distribuição.",
        "Perdas nas redes, ocupação de áreas de mananciais e períodos de estiagem podem afetar o abastecimento. A prevenção envolve planejamento, monitoramento e participação social.",
        "Medidas de uso eficiente, proteção de nascentes e reúso adequado podem complementar investimentos em infraestrutura, respeitando as características de cada território.",
      ],
    },
    {
      id: "accessibility",
      theme:
        "Desafios para garantir acessibilidade nos espaços públicos brasileiros",
      texts: [
        "A acessibilidade permite que pessoas com diferentes características e necessidades utilizem espaços, serviços e informações com autonomia e segurança.",
        "Calçadas contínuas, transporte acessível, sinalização compreensível e recursos de comunicação podem reduzir barreiras no cotidiano.",
        "A participação das pessoas com deficiência no planejamento e na avaliação de políticas públicas contribui para identificar obstáculos que projetos genéricos podem não perceber.",
      ],
    },
  ];
  const prompt =
    prompts.find((item) => item.id === draft.themeId) ?? prompts[0];
  if (!draft.themeId) draft.themeId = prompt.id;
  draft.themeTitle = prompt.theme;
  const competencies = [
    [
      "Domínio da escrita formal",
      "Ortografia, gramática, registro e convenções da escrita.",
    ],
    [
      "Compreensão do tema e do gênero",
      "Atendimento ao recorte temático e à estrutura dissertativo-argumentativa.",
    ],
    [
      "Argumentação",
      "Seleção, organização e interpretação de informações e argumentos.",
    ],
    [
      "Coesão",
      "Articulação das ideias e uso de recursos linguísticos para construir a argumentação.",
    ],
    [
      "Intervenção",
      "Proposta de ação detalhada, relacionada ao tema e respeitosa aos direitos humanos.",
    ],
  ];
  const rubric = [
    "0 · Não demonstrado no texto.",
    "1 · Muito incipiente; há desvios ou lacunas que comprometem a competência.",
    "2 · Parcial; demonstra alguns elementos, mas com problemas recorrentes.",
    "3 · Adequado; atende ao essencial, embora ainda haja pontos a desenvolver.",
    "4 · Consistente; bom domínio, com poucas fragilidades.",
    "5 · Muito consistente; domínio claro, articulado e bem desenvolvido.",
  ];
  const savedRatings = Array.isArray(draft.competencies)
    ? Object.fromEntries(draft.competencies.map((id) => [id, "3"]))
    : (draft.competencies ?? {});
  mainContent.innerHTML = `
    <div class="crumb"><span>Plano de Estudos 95</span><span>›</span><span class="crumb-current">Redação</span></div>
    <div class="lesson-heading"><div><h1>Prática de redação</h1><p>Proposta original para treino. Organize suas ideias, escreva e revise com as competências do ENEM. Não há correção ou nota automática.</p></div></div>
    <div class="essay-practice">
      <section class="essay-prompt"><h2>Proposta de redação</h2><p><strong>Tema:</strong> ${escapeHtml(prompt.theme)}</p>
        ${!finished ? `<div class="form-row"><label for="essayTheme">Escolher outro tema</label><select id="essayTheme">${prompts.map((item) => `<option value="${item.id}"${item.id === prompt.id ? " selected" : ""}>${escapeHtml(item.theme)}</option>`).join("")}</select></div>` : ""}
        <h3>Textos motivadores</h3>${prompt.texts.map((text, index) => `<p><strong>Texto ${index + 1}.</strong> ${escapeHtml(text)}</p>`).join("")}
        <p>Com base na leitura dos textos motivadores e em seus conhecimentos, redija um texto dissertativo-argumentativo em modalidade escrita formal sobre o tema. Apresente proposta de intervenção que respeite os direitos humanos.</p>
      </section>
      <div class="essay-stats"><strong>Tempo: <span id="essayTimer">${draft.endsAt ? formatTime(remaining) : "60:00"}</span></strong>
        <span>Linhas estimadas: <strong id="essayLines">0</strong> (7 a 30)</span>
        <span>Palavras: <strong id="essayWords">0</strong></span>
      </div>
      <p class="essay-line-guidance" id="essayLineGuidance" aria-live="polite">Estimativa aproximada de 10 palavras por linha manuscrita; a contagem real depende da letra e da folha oficial.</p>
      <textarea class="essay-editor" id="essayText" aria-label="Rascunho da redação" placeholder="Escreva sua redação aqui..."${finished ? " disabled" : ""}>${escapeHtml(draft.text ?? "")}</textarea>
      ${finished ? `<p class="practice-summary">Treino finalizado e salvo. A autoavaliação não gera pontuação automática.</p>` : ""}
      <fieldset class="essay-checklist"${finished ? " disabled" : ""}><legend>Autoavaliação · sem nota automática</legend>
        ${competencies
          .map(
            ([title, description], index) => `<div class="essay-competency">
          <label for="essayCompetency${index + 1}"><strong>Competência ${index + 1}: ${escapeHtml(title)}.</strong> ${escapeHtml(description)}</label>
          <select id="essayCompetency${index + 1}" data-essay-competency="${index + 1}">
            <option value="">Não avaliada</option>
            ${rubric.map((level, levelIndex) => `<option value="${levelIndex}"${String(savedRatings[index + 1] ?? "") === String(levelIndex) ? " selected" : ""}>${escapeHtml(level)}</option>`).join("")}
          </select>
        </div>`,
          )
          .join("")}
      </fieldset>
      <div class="quiz-actions">
        ${!draft.startedAt && !finished ? `<button class="win-button" type="button" data-action="start-essay-timer">Iniciar cronômetro de 60 minutos</button>` : ""}
        ${!finished ? `<button class="win-button primary" type="button" data-action="finish-essay">Salvar redação e finalizar</button>` : ""}
        <button class="win-button" type="button" data-action="clear-essay">Novo rascunho</button>
      </div>
    </div>`;
  saveEssayDraft(draft);
  updateEssayCounts();
  if (draft.startedAt && !finished) {
    if (essayTimer !== null) clearInterval(essayTimer);
    essayTimer = setInterval(updateEssayTimer, 1000);
  }
}

function updateEssayCounts() {
  const editor = mainContent.querySelector("#essayText");
  if (!editor) return;
  const words = editor.value.trim()
    ? editor.value.trim().split(/\s+/).length
    : 0;
  const lines = words ? Math.ceil(words / 10) : 0;
  const lineCount = mainContent.querySelector("#essayLines");
  const wordCount = mainContent.querySelector("#essayWords");
  const guidance = mainContent.querySelector("#essayLineGuidance");
  if (lineCount) lineCount.textContent = String(lines);
  if (wordCount) wordCount.textContent = String(words);
  if (guidance) {
    guidance.textContent =
      lines === 0
        ? "Estimativa aproximada de 10 palavras por linha manuscrita; a contagem real depende da letra e da folha oficial."
        : lines < 7
          ? `Estimativa de ${lines} linha(s) manuscrita(s); a referência mínima é 7.`
          : lines > 30
            ? `Estimativa de ${lines} linhas manuscritas; a referência máxima é 30.`
            : `Estimativa de ${lines} linhas manuscritas, dentro da referência de 7 a 30.`;
  }
}

function archiveEssayDraft() {
  const draft = readStoredJson(essayDraftStorageKey, {});
  const editor = mainContent.querySelector("#essayText");
  if (editor) draft.text = editor.value;
  if (draft.finishedAt || !draft.text?.trim()) return true;
  const words = draft.text.trim().split(/\s+/).length;
  const attempts = getAttempts();
  attempts.push({
    date: Date.now(),
    view: "essay",
    label: `Rascunho · ${draft.themeTitle ?? draft.themeId ?? "redação"}`,
    total: words,
    lines: Math.ceil(words / 10),
    score: null,
    essayText: draft.text,
    themeId: draft.themeId,
    competencies: draft.competencies ?? {},
    isDraft: true,
  });
  try {
    localStorage.setItem(
      attemptsStorageKey,
      JSON.stringify(attempts.slice(-50)),
    );
    return true;
  } catch (error) {
    reportStorageFailure(
      "Não foi possível arquivar o rascunho da redação.",
      error,
    );
    return false;
  }
}

function finishEssayPractice(expired = false) {
  const draft = readStoredJson(essayDraftStorageKey, {});
  const editor = mainContent.querySelector("#essayText");
  if (editor) draft.text = editor.value;
  if (!draft.text?.trim() && !expired) {
    statusText.textContent =
      "Escreva um rascunho antes de finalizar a prática.";
    return;
  }
  draft.finishedAt = Date.now();
  draft.expired = expired;
  let saved = saveEssayDraft(draft);
  const attempts = getAttempts();
  if (draft.text?.trim()) {
    const words = draft.text.trim().split(/\s+/).length;
    attempts.push({
      date: draft.finishedAt,
      view: "essay",
      label: `Redação · ${draft.themeTitle ?? draft.themeId ?? "tema"}`,
      total: words,
      lines: Math.ceil(words / 10),
      score: null,
      wrongQuestions: [],
      essayText: draft.text,
      themeId: draft.themeId,
      competencies: draft.competencies ?? {},
      expired,
    });
    try {
      localStorage.setItem(
        attemptsStorageKey,
        JSON.stringify(attempts.slice(-50)),
      );
    } catch (error) {
      reportStorageFailure(
        "A redação foi finalizada, mas não foi possível salvar no histórico.",
        error,
      );
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
      ? draft.text?.trim()
        ? "Tempo encerrado. Sua redação foi salva."
        : "Tempo encerrado. O rascunho foi mantido."
      : "Redação salva. Revise as competências sem atribuir nota automática.";
}
