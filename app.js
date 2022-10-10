let gameState = {
  currentPlayer: "X",
  gameWin: false,
  board: [null, null, null, null, null, null, null, null, null],
};

//dom refs
const board = document.getElementById("board");
const displayWinner = document.getElementById("winner");

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
  if (gameState.gameWin === true) {
    return;
  }
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

function checkWin() {
  for (let i = 0; i < winCombinations.length; i++) {
    let winComb = winCombinations[i];

    if (
      gameState.board[winComb[0]] === null ||
      gameState.board[winComb[1]] === null ||
      gameState.board[winComb[2]] === null
    ) {
      continue;
    }
    if (
      gameState.board[winComb[0]] === gameState.board[winComb[1]] &&
      gameState.board[winComb[1]] === gameState.board[winComb[2]]
    ) {
      console.log(gameState.currentPlayer + "won");
      gameState.gameWin = true;
      if (gameState.gameWin === true) {
        displayWinner.innerText = `${gameState.currentPlayer} is the Winner!`;
      }
    }
  }
}

function checkDraw() {}

//eventListeners
board.addEventListener("click", function (e) {
  //console.log(e);
  const index = e.target.id;
  gameState.board[index] = gameState.currentPlayer;
  //updatePlay(index);
  renderGame();
  checkWin();
  switchPlayer();

  console.log(gameState.board);
});
