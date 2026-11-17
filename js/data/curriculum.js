const starterLibrary = {};

function curriculumPart(category, title, intro, points, note) {
  const sampleIndices = [
    ...new Set([0, Math.floor((points.length - 1) / 2), points.length - 1]),
  ].filter((index) => points[index]);
  const questions = sampleIndices.map((pointIndex) => {
    const point = points[pointIndex];
    const labels = points.map((item) => item[0]);
    const distractors = labels.filter((_, index) => index !== pointIndex);
    const choices = [point[0], ...distractors.slice(0, 2)];
    for (let index = choices.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [choices[index], choices[randomIndex]] = [
        choices[randomIndex],
        choices[index],
      ];
    }
    const answer = choices.indexOf(point[0]);
    const alternatives = choices
      .filter((_, index) => index !== answer)
      .map((label) => {
        const alternative = points.find((item) => item[0] === label);
        return alternative ? `${label}: ${alternative[1]}` : label;
      });
    return {
      text: `Qual conceito corresponde a esta descrição? ${point[1]}`,
      choices,
      answer,
      explanation: `${point[0]} corresponde à descrição porque ${point[1].charAt(0).toLowerCase()}${point[1].slice(1)} As outras opções tratam de conceitos diferentes: ${alternatives.join("; ")}.`,
    };
  });
  return {
    category,
    title,
    intro,
    heading: "Conceitos principais",
    points,
    note,
    questions,
  };
}
