const fs = require('fs');

const file = fs.readFileSync('input.txt', 'utf-8');
let array = file.split('\n');

console.log(array);

let result = [];
let sum = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] !== '') {
    sum += +array[i];
  } else {
    result.push(sum);
    sum = 0;
  }
}

result.sort((a, b) => b - a);

console.log(result[0]); // Part 1
console.log(result[0] + result[1] + result[2]); // Part 2
