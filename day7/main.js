const { readFileSync } = require('fs');

const file = readFileSync('input.txt', 'utf-8')
  .split('\n')
  .map((line) => line.split(' '));
const MAX_SIZE = 100000;
let path = [];
let data = {};
let sizes = [];
let usedSpace = 0;

file.forEach((command) => {
  if (command[1] === 'cd') {
    if (command[2] === '..') {
      path.pop();
    } else {
      path.push(command[2]);
    }
  } else if (/[0-9]/g.test(command[0])) {
    usedSpace += +command[0];
    data[path] ? (data[path] += +command[0]) : (data[path] = +command[0]);
  } else if (command[0] === 'dir') {
    data[[...path, command[1]]] = 0;
  }
});

Object.keys(data).forEach((path) => {
  let sum = 0;
  for (let prop in data) {
    if (prop.startsWith(path)) sum += data[prop];
  }
  sizes.push(sum);
});

/*============
    Part 1
=============*/

let total = sizes
  .filter((num) => num <= MAX_SIZE)
  .reduce((acc, val) => acc + val, 0);

console.log(total);

/*============
    Part 2
=============*/

const DISK_SIZE = 70000000;
const NEEDED_UNUSED_SPACE = 30000000;
const totalToDelete = usedSpace - (DISK_SIZE - NEEDED_UNUSED_SPACE);

const folderSizeToDelete = sizes
  .filter((size) => size >= totalToDelete)
  .sort((a, b) => a - b);

console.log(folderSizeToDelete[0]);
