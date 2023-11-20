import { readFromFile } from "..";

class Buffer {
  private data: string[] = [];

  push(item: string): void {
    this.data.push(item);
  }

  unshift(item: string): void {
    this.data.unshift(item);
  }

  shift(): string | undefined {
    return this.data.shift();
  }

  pop(): string | undefined {
    return this.data.pop();
  }

  printFirst(): void {
    console.log(this.data[0]);
  }
}

let done: boolean = false;
const data: string = await readFromFile("input");
const lines: string[] = data.split("\r\n");
const stacks: Buffer[] = [];

for (let i = 0; i < Math.round(lines[0].length / 4); i++) {
  stacks.push(new Buffer());
}

for (const line of lines) {
  const tokens = line.split("");
  if (tokens.length === 0 || RegExp(/\d/).exec(tokens[1])) {
    done = true;
    continue;
  }
  if (!done) {
    for (let i = 0; i < tokens.length; i += 4) {
      if (tokens[1 + i] !== " ") {
        stacks[i / 4].push(tokens[1 + i]);
      }
    }
  } else {
    const string: string = tokens.join("");
    const regex = /\b\d+\b/g;
    const moves = string.matchAll(regex);
    const bozo: number[] = Array.from(moves)
      .flat()
      .map((x) => parseInt(x));

    const howMuch = bozo[0];
    const from = bozo[1];
    const to = bozo[2];

    for (let i = 0; i < howMuch; i++) {
      stacks[to - 1].unshift(stacks[from - 1].shift()!);
    }
  }
}

const output = stacks.map((x) => {
  return x.shift();
});

console.log(output.toString().replace(/,/g, ""));
