const { readFileSync } = require('fs');
const file = readFileSync('input.txt', 'utf-8').split('\n');

let width = file[0].length;
let height = file.length;
let visibleTrees = (width + height) * 2 - 4;

for (let row = 1; row < file.length - 1; row++) {
  for (let col = 1; col < file[row].length - 1; col++) {
    if (checkRow(row, col) || checkColumn(row, col)) visibleTrees += 1;
  }
}

function checkRow(row, col) {
  let cell = file[row][col];
  let left = file[row].slice(0, col);
  let right = file[row].slice(col + 1);

  if (Math.max(...left) >= cell && Math.max(...right) >= cell) return false;

  return true;
}

function checkColumn(row, col) {
  let cell = file[row][col];
  let top = true;
  let bottom = true;

  for (let i = 0; i < row; i++) {
    if (file[i][col] >= cell) {
      top = false;
      break;
    }
  }

  for (let i = row + 1; i < file.length; i++) {
    if (file[i][col] >= cell) {
      bottom = false;
      break;
    }
  }

  return top || bottom;
}

console.log('Visible trees: ', visibleTrees);
