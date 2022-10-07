let gameState = {
  playerOne: "",
  playerTwo: "",
  currentPlayer: "X",
  gameStatus: false,
  board: [null, null, null, null, null, null, null, null, null],
};
let winner;

//dom refs
const board = document.getElementById("board");
const displayPlayer = document.getElementsByClassName("display-player");
const drawMsg = "Draw!";
const winningMsg = "you win!";
//functions

function createBoard() {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.id = `${i}`;
    board.appendChild(cell);
    console.log("board");
  }
}

createBoard();

function renderGame() {
  for (let i = 0; i < gameState.board.length; i++) {
    const currValue = gameState.board[i];
    const currCell = document.getElementById(`${i}`);
    currCell.innerHTML = currValue;
  }
}

function switchPlayer() {
  //let nextPlayer = gameState.currentPlayer;
  if (gameState.currentPlayer === "X") {
    gameState.currentPlayer = "O";
  } else {
    gameState.currentPlayer = "X";
  }
}

const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [0, 4, 8],
  [2, 5, 8],
  [2, 4, 6],
];

function checkWin() {}
// if (gameState.board === winCombinations) {
//   return winningMsg;
// } else {
//   return checkTie();
// }

// function checkTie() {
//   if (gameState.board !== winCombinations) {
//     return drawMsg;
//   }
// }

//eventListeners
board.addEventListener("click", function (e) {
  //console.log(e);
  const index = e.target.id;
  gameState.board[index] = gameState.currentPlayer;
  //updatePlay(index);
  renderGame();
  switchPlayer();
  checkWin();
  console.log(gameState.board);
});
