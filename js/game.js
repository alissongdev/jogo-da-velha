let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let gameOver = false;
let symbols = ['circle', 'xis'];
let winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleMove(position) {
  if (gameOver) {
    return;
  }

  if (board[position] == '') {
    board[position] = symbols[playerTime];

    gameOver = isWin();

    if (gameOver == false) {
      playerTime = (playerTime == 0) ? 1 : 0;
    }
  }
  return gameOver;
}

function isWin() {
  for (i = 0; i < winStates.length; i++) {
    let sequence = winStates[i];

    let pos1 = sequence[0];
    let pos2 = sequence[1];
    let pos3 = sequence[2];

    if (board[pos1] == board[pos2] && 
        board[pos1] == board[pos3] && board[pos1] != '') {
          return true;
        }
    }
    return false;
}
