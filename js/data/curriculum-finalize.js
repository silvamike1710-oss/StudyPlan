const explanationStopWords = new Set([
  "a",
  "ao",
  "aos",
  "as",
  "com",
  "como",
  "da",
  "das",
  "de",
  "do",
  "dos",
  "e",
  "em",
  "entre",
  "o",
  "os",
  "ou",
  "para",
  "pela",
  "pelo",
  "por",
  "qual",
  "quais",
  "que",
  "se",
  "um",
  "uma",
]);

function explainQuestionFromLesson(part, question) {
  const correctAnswer = question.choices[question.answer];
  if (typeof correctAnswer !== "string") return "";

  const normalizeWords = (value) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .match(/[a-z0-9]+/g) || [];
  const promptWords = new Set(
    normalizeWords(`${question.text} ${correctAnswer}`).filter(
      (word) => word.length > 2 && !explanationStopWords.has(word),
    ),
  );
  let bestMatch;
  let bestScore = 0;

  for (const point of part.points) {
    const labelWords = normalizeWords(point[0]).filter(
      (word) => word.length > 2 && !explanationStopWords.has(word),
    );
    const detailWords = normalizeWords(point[1]).filter(
      (word) => word.length > 3 && !explanationStopWords.has(word),
    );
    const labelScore = labelWords.reduce(
      (score, word) => score + (promptWords.has(word) ? 4 : 0),
      0,
    );
    const detailScore = detailWords.reduce(
      (score, word) => score + (promptWords.has(word) ? 1 : 0),
      0,
    );
    const score = labelScore + detailScore;
    if (score > bestScore) {
      bestMatch = point;
      bestScore = score;
    }
  }

  if (!bestMatch) return `A resposta correta é “${correctAnswer}”.`;
  return `A resposta correta é “${correctAnswer}”. ${bestMatch[0]}: ${bestMatch[1]}`;
}

for (const subject of Object.values(starterLibrary)) {
  for (const part of subject.parts) {
    for (const question of part.questions || []) {
      if (
        typeof question.explanation !== "string" ||
        !question.explanation.trim()
      ) {
        question.explanation = explainQuestionFromLesson(part, question);
      }
    }
  }
}
