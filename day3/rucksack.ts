import { readFromFile } from "..";

let sumP1: number = 0;
let sumP2: number = 0;

const data = await readFromFile("input");

// part 1
data.split("\n").forEach((value) => {
  const firstHalf: string = value.substring(0, value.length / 2);
  const secondHalf: string = value.substring(value.length / 2);
  const arrLines: string[] = [firstHalf, secondHalf];

  const commonLetter: string | null = findCommonLetter(arrLines);

  if (commonLetter !== null) {
    sumP1 += getPriority(commonLetter);
  }
});

// part 2
const lines: string[] = data.split("\n");
for (let i = 0; i < lines.length; i += 3) {
  const arrLines: string[] = [lines[i], lines[i + 1], lines[i + 2]];

  const commonLetter: string | null = findCommonLetter(arrLines);

  if (commonLetter !== null) {
    sumP2 += getPriority(commonLetter);
  }
}

// utils
function findCommonLetter(arr: string[]): string | null {
  const [firstString, ...restStrings] = arr;

  for (const char of firstString) {
    if (restStrings.every((str) => str.includes(char))) {
      return char;
    }
  }

  return null;
}

function getPriority(char: string) {
  const upperCase: number = 38;
  const lowerCase: number = 96;

  if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
    return char.charCodeAt(0) - lowerCase;
  } else {
    return char.charCodeAt(0) - upperCase;
  }
}

// output
console.log(sumP1);
console.log(sumP2);
