import { readFromFile } from "../index";

const scoringRulesPt1: { [key: string]: { [key: string]: number } } = {
  A: { X: 3 + 1, Y: 6 + 2, Z: 0 + 3 },
  B: { X: 0 + 1, Y: 3 + 2, Z: 6 + 3 },
  C: { X: 6 + 1, Y: 0 + 2, Z: 3 + 3 },
};

const scoringRulesPt2: { [key: string]: { [key: string]: number } } = {
  A: { X: 0 + 3, Y: 3 + 1, Z: 6 + 2 },
  B: { X: 0 + 1, Y: 3 + 2, Z: 6 + 3 },
  C: { X: 0 + 2, Y: 3 + 3, Z: 6 + 1 },
};


// Part 1
function getScorePt1(data: string) {
  const scores = data.split("\n").map((value) => {
    const [opponent, player] = value.split(" ");
    return scoringRulesPt1[opponent]?.[player] || 0;
  });
  return scores.reduce((prev, curr) => (prev ?? 0) + (curr ?? 0), 0);
}

// Part 2
function getScorePt2(data: string) {
  const scores = data.split("\n").map((value) => {
    const [opponent, player] = value.split(" ");
    return scoringRulesPt2[opponent]?.[player] || 0;
  });
  return scores.reduce((prev, curr) => (prev ?? 0) + (curr ?? 0), 0);
}


readFromFile("input")
  .then((data) => {
    const totalScore = getScorePt1(data);
    console.log("Result score pt.1: " + totalScore);
    const totalScore2 = getScorePt2(data);
    console.log("Result score pt.2: " + totalScore2);
  })
  .catch((err) => console.error(err));
