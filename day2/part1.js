const fs = require("fs");

const file = fs.readFileSync("input.txt", "utf-8");
const inputArray = file.split("\n");
const DRAW_SCORE = 3;
const WIN_SCORE = 6;

const OPPONENT_MOVES = {
  A: "rock",
  B: "paper",
  C: "scissors",
};

const PLAYER_MOVES = {
  X: { move: "rock", score: 1, beats: "scissors" },
  Y: { move: "paper", score: 2, beats: "rock" },
  Z: { move: "scissors", score: 3, beats: "paper" },
};

let totalScore = 0;
let playerMove;
let opponentMove;

for (let i = 0; i < inputArray.length; i++) {
  playerMove = inputArray[i][2];
  opponentMove = inputArray[i][0];

  if (PLAYER_MOVES[playerMove].move === OPPONENT_MOVES[opponentMove]) {
    totalScore += PLAYER_MOVES[playerMove].score + DRAW_SCORE;
  } else if (PLAYER_MOVES[playerMove].beats === OPPONENT_MOVES[opponentMove]) {
    totalScore += PLAYER_MOVES[playerMove].score + WIN_SCORE;
  } else {
    totalScore += PLAYER_MOVES[playerMove].score;
  }
}

console.log(totalScore);
