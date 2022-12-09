const { readFileSync } = require('fs');

const file = readFileSync('input.txt', 'utf-8');

for (let i = 0; i < file.length; i++) {
  let result = new Set(file.substring(i, i + 4));
  if (result.size === 4) {
    console.log(i + 4);
    break;
  }
}
