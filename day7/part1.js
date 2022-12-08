const fs = require("fs");
const file = fs
  .readFileSync("input.txt", "utf-8")
  .split("\n")
  .map((line) => line.split(" "));
const MAX_SIZE = 100000;
let path = [];
let data = {};
let sizes = [];

file.forEach((command) => {
  if (command[1] === "cd") {
    if (command[2] === "..") {
      path.pop();
    } else {
      path.push(command[2]);
    }
  } else if (/[0-9]/g.test(command[0])) {
    data[path] ? (data[path] += +command[0]) : (data[path] = +command[0]);
  } else if (command[0] === "dir") {
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

let total = sizes
  .filter((num) => num <= MAX_SIZE)
  .reduce((acc, val) => acc + val, 0);

console.log(total);
