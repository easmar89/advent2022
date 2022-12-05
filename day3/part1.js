const fs = require("fs");

let file = fs.readFileSync("input.txt", "utf-8");
let inputArray = file.split("\n");
const PRIORITIES = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let prioritiesSum = 0;

inputArray.forEach((list) => {
  let half = list.length / 2;
  let part1 = list.slice(0, half);
  let part2 = list.slice(half);
  let duplicates = {};

  for (let i = 0; i < part1.length; i++) {
    if (part2.includes(part1[i]) && !duplicates[part1[i]]) {
      prioritiesSum += PRIORITIES.indexOf(part1[i]) + 1;
      duplicates[part1[i]] = 1;
    }
  }
});

console.log(prioritiesSum);
