import { readFromFile } from "..";

let numP1 = 0;
let numP2 = 0;

const data: string = await readFromFile("input");
const ranges = parseRanges(data);

// part 1
ranges.forEach((array) =>
  checkInRange([array[0], array[1]], [array[2], array[3]]) ? numP1++ : null
);

// part 2
ranges.forEach((array) =>
  checkOverlap([array[0], array[1]], [array[2], array[3]]) ? numP2++ : null
);

// utils
function parseRanges(data: string): number[][] {
  return data.split("\n").map((line) => {
    const ranges: string[] = line
      .split(",")
      .map((array) => {
        return array.split("-");
      })
      .flat();

    ranges[3] = ranges[3].trim(); // remove line terminators

    return ranges.map((num) => parseInt(num));
  });
}

function checkInRange(range1: number[], range2: number[]): boolean {
  if (
    (range2[0] <= range1[0] && range1[1] <= range2[1]) ||
    (range2[0] >= range1[0] && range1[1] >= range2[1])
  ) {
    return true;
  } else {
    return false;
  }
}

function checkOverlap(range1: number[], range2: number[]) {
  if (
    checkInRange(range1, range2) ||
    (range1[0] <= range2[1] && range1[1] >= range2[1]) ||
    (range1[0] <= range2[0] && range1[1] >= range2[0])
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(numP1); // 536
console.log(numP2); // 845
