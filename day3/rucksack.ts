import { readFromFile } from "..";

let sumP1: number = 0;
let sumP2: number = 0;

const data = await readFromFile("input");

// part 1
data.split("\n").forEach((value) => {
  const firstHalf: string = value.substring(0, value.length / 2);
  const secondHalf: string = value.substring(value.length / 2);
  const upperCase: number = 38;
  const lowerCase: number = 96;

  for (const element of firstHalf) {
    const character: string = element;

    if (secondHalf.includes(character)) {
      if (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122) {
        sumP1 += character.charCodeAt(0) - lowerCase;
      } else {
        sumP1 += character.charCodeAt(0) - upperCase;
      }
      break;
    }
  }
});

// part 2 - WIP
const lines: string[] = data.split("\n");
for (let i = 0; i < lines.length; i++) {
  const line: string = lines[i];
  if (i % 3 === 0) {
    // sum and flush
  }
}

console.log(sumP1);
console.log(sumP2);
