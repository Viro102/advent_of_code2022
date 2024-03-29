import { readFromFile } from "../index";

// Part 1
function getMax(data: string) {
  let maxLocal: number = 0;
  let maxGlobal: number = 0;
  data.split("\n").forEach((line) => {
    if (line == "") {
      if (maxLocal >= maxGlobal) {
        maxGlobal = maxLocal;
      }
      maxLocal = 0;
    } else {
      maxLocal += parseInt(line, 10);
    }
  });

  console.log("part 1: " + maxGlobal);
}

// Part 2
function getMaxThree(data: string) {
  let maxLocal: number = 0;
  const ar: number[] = [];

  data.split("\n").forEach((line) => {
    if (line == "") {
      ar.push(maxLocal);
      maxLocal = 0;
    } else {
      maxLocal += parseInt(line, 10);
    }
  });
  ar.sort((a, b) => b - a);

  const res = ar.reduce((prev, curr, i) => {
    if (i > 2) return prev;
    return prev + curr;
  });

  console.log("part 2: " + res);
}

readFromFile("input")
  .then((data) => {
    getMax(data);
    getMaxThree(data);
  })
  .catch((error) => {
    console.error(error);
  });
