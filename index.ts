import { readFile } from "fs";

export function readFromFile(fileName: string): Promise<string> {
  return new Promise((resolve, reject) => {
    readFile(fileName, "ascii", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
