const { readFileSync } = require('fs');
const file = readFileSync('input.txt', 'utf-8').split('\n');
let highestScore = 0;

for (let row = 1; row < file.length; row++) {
  for (let col = 1; col < file[row].length; col++) {
    let score = checkRow(row, col) * checkColumn(row, col);
    if (score > highestScore) highestScore = score;
  }
}

function checkRow(row, col) {
  let cell = file[row][col];
  let left = 0;
  let right = 0;

  for (let i = col - 1; i >= 0; i--) {
    if (file[row][i] < cell) {
      left++;
    } else {
      left++;
      break;
    }
  }

  for (let i = col + 1; i < file[row].length; i++) {
    if (file[row][i] < cell) {
      right++;
    } else {
      right++;
      break;
    }
  }

  return left * right;
}

function checkColumn(row, col) {
  let cell = file[row][col];
  let top = 0;
  let bottom = 0;

  for (let i = row - 1; i >= 0; i--) {
    if (file[i][col] < cell) {
      top++;
    } else {
      top++;
      break;
    }
  }

  for (let i = row + 1; i < file.length; i++) {
    if (file[i][col] < cell) {
      bottom++;
    } else {
      bottom++;
      break;
    }
  }

  return top * bottom;
}

console.log(highestScore);
