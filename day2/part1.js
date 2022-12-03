const fs = require('fs');

const file = fs.readFileSync('input.txt', 'utf-8');
let inputArray = file.split('\n');

const OPPONENT_MOVES = {
  A: 'rock',
  B: 'paper',
  C: 'scissors',
};

const PLAYER_MOVES = {
  X: { move: 'rock', score: 1, beats: 'scissors' },
  Y: { move: 'paper', score: 2, beats: 'rock' },
  Z: { move: 'scissors', score: 3, beats: 'paper' },
};

let totalScore = 0;
let playerMove;
let opponentMove;

for (let i = 0; i < inputArray.length; i++) {
  playerMove = inputArray[i][2];
  opponentMove = inputArray[i][0];

  if (PLAYER_MOVES[playerMove].move === OPPONENT_MOVES[opponentMove]) {
    totalScore += PLAYER_MOVES[playerMove].score + 3;
  } else if (PLAYER_MOVES[playerMove].beats === OPPONENT_MOVES[opponentMove]) {
    totalScore += PLAYER_MOVES[playerMove].score + 6;
  } else {
    totalScore += PLAYER_MOVES[playerMove].score;
  }
}

console.log(totalScore);
