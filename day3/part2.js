const fs = require("fs");

let file = fs.readFileSync("input.txt", "utf-8");
let inputArray = file.split("\n");
const PRIORITIES = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let prioritiesSum = 0;

for (let i = 0; i < inputArray.length; i += 3) {
  let firstCheck = findCommonChar(inputArray[i], inputArray[i + 1]);
  let secondCheck = findCommonChar(firstCheck, inputArray[i + 2]);

  prioritiesSum += PRIORITIES.indexOf(secondCheck) + 1;
}

function findCommonChar(str1, str2) {
  let duplicates = "";

  for (let i = 0; i < str1.length; i++) {
    if (str2.includes(str1[i]) && !duplicates.includes(str1[i])) {
      duplicates += str1[i];
    }
  }

  return duplicates;
}

console.log(prioritiesSum);
