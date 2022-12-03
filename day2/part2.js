const fs = require('fs');

const file = fs.readFileSync('input.txt', 'utf-8');
let inputArray = file.split('\n');

const OPPONENT_MOVES = {
  A: 'rock',
  B: 'paper',
  C: 'scissors',
};

const PLAYER_MOVES = {
  rock: { score: 1, beats: 'scissors' },
  paper: { score: 2, beats: 'rock' },
  scissors: { score: 3, beats: 'paper' },
};

let totalScore = 0;
let playerMove;
let opponentMove;

for (let i = 0; i < inputArray.length; i++) {
  opponentMove = inputArray[i][0];
  playerMove = setPlayerMove(inputArray[i][2], opponentMove);

  if (playerMove === OPPONENT_MOVES[opponentMove]) {
    totalScore += PLAYER_MOVES[playerMove].score + 3;
  } else if (PLAYER_MOVES[playerMove].beats === OPPONENT_MOVES[opponentMove]) {
    totalScore += PLAYER_MOVES[playerMove].score + 6;
  } else {
    totalScore += PLAYER_MOVES[playerMove].score;
  }
}

function setPlayerMove(input, oppMove) {
  if (input === 'Y') {
    return OPPONENT_MOVES[oppMove];
  } else if (input === 'X') {
    return PLAYER_MOVES[OPPONENT_MOVES[oppMove]].beats;
  } else {
    for (let prop in PLAYER_MOVES) {
      if (PLAYER_MOVES[prop].beats === OPPONENT_MOVES[oppMove]) {
        return prop;
      }
    }
  }
}

console.log(totalScore);
