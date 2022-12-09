const { readFileSync } = require('fs');

const file = readFileSync('input.txt', 'utf-8');
const inputArray = file.replaceAll('-', '\n').replaceAll(',', '\n').split('\n');

let overlaps = 0;

for (let i = 0; i < inputArray.length; i += 4) {
  if (
    (+inputArray[i] <= +inputArray[i + 2] &&
      +inputArray[i + 1] >= +inputArray[i + 3]) ||
    (+inputArray[i] >= +inputArray[i + 2] &&
      +inputArray[i] <= +inputArray[i + 3]) ||
    (+inputArray[i + 1] >= +inputArray[i + 2] &&
      +inputArray[i + 1] <= +inputArray[i + 3])
  ) {
    overlaps++;
  }
}

console.log(overlaps);
