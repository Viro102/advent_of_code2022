import { readFromFile } from "../index";

const scoringRules: { [key: string]: { [key: string]: number } } = {
  A: { X: 3 + 1, Y: 6 + 2, Z: 0 + 3 },
  B: { X: 0 + 1, Y: 3 + 2, Z: 6 + 3 },
  C: { X: 6 + 1, Y: 0 + 2, Z: 3 + 3 },
};

// Part 1
function getTotalScore(data: string) {
  const scores = data.split("\n").map((value) => {
    const [opponent, player] = value.split(" ");
    return scoringRules[opponent]?.[player] || 0;
  });
  return scores.reduce((prev, curr) => (prev ?? 0) + (curr ?? 0), 0);
}

readFromFile("input")
  .then((data) => {
    const totalScore = getTotalScore(data);
    console.log("Result score: " + totalScore);
  })
  .catch((err) => console.error(err));
