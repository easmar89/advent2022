const fs = require('fs');
const dataFile = fs.readFileSync('input.txt', 'utf-8');
const commandsFile = fs
  .readFileSync('commands.txt', 'utf-8')
  .replaceAll(/[a-z]+\s/gi, '')
  .split('\n')
  .map((line) => line.split(' '));

let data = parseData(dataFile);
let result = '';

commandsFile.forEach((command) => {
  let crates = data[command[1] - 1].splice(command[0] * -1);
  data[command[2] - 1].push(...crates);
});

for (let prop in data) {
  let stack = data[prop];
  result += stack[stack.length - 1];
}

console.log(result);

function parseData(input) {
  let idx = 0;
  let arrays = {};

  for (let i = 0; i < input.length; i += 4) {
    if (input[i] !== ' ') {
      arrays[idx]
        ? arrays[idx].unshift([input[i + 1]])
        : (arrays[idx] = [[input[i + 1]]]);
    }

    idx++;
    if (idx === 9) idx = 0;
  }

  return arrays;
}
