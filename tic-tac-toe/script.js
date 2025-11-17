// ICONS
const player1Icon = '<i class="fa-regular fa-circle-xmark icon"></i>'; // X
const player2Icon = '<i class="fa-regular fa-circle-check icon"></i>'; // O

// BUTTONS
const boxes = document.querySelectorAll(".buttons button");

// SCORE
let p1Score = 0;
let p2Score = 0;

// TURN
let turn = true;

// WINNER MESSAGE
const winnerText = document.getElementById("winner");

// SCORE UI
const score1 = document.getElementById("score-plr1");
const score2 = document.getElementById("score-plr2");

// WINNING PATTERNS
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// GAME LOGIC
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerHTML !== "") return;

    if (turn) {
      box.innerHTML = player1Icon;
      box.dataset.val = "X";
    } else {
      box.innerHTML = player2Icon;
      box.dataset.val = "O";
    }

    checkWinner();
    turn = !turn;
  });
});

// CHECK WINNER
function checkWinner() {
  for (let pattern of winPatterns) {
    let b1 = boxes[pattern[0]].dataset.val;
    let b2 = boxes[pattern[1]].dataset.val;
    let b3 = boxes[pattern[2]].dataset.val;

    if (b1 && b1 === b2 && b2 === b3) {
      // ⭐ GREEN HIGHLIGHT ⭐
      pattern.forEach((i) => {
        boxes[i].style.background = "limegreen";
        boxes[i].style.color = "white";
      });

      if (b1 === "X") {
        p1Score++;
        score1.textContent = p1Score;
        winnerText.textContent = "Player 1 Won!";
      } else {
        p2Score++;
        score2.textContent = p2Score;
        winnerText.textContent = "Player 2 Won!";
      }

      resetGame();
      return;
    }
  }

  // DRAW
  if ([...boxes].every((box) => box.innerHTML !== "")) {
    winnerText.textContent = "Draw!";
    resetGame();
  }
}

// RESET GAME
function resetGame() {
  setTimeout(() => {
    boxes.forEach((box) => {
      box.innerHTML = "";
      box.dataset.val = "";
      box.style.background = "";
      box.style.color = "";
    });

    winnerText.textContent = "";
  }, 1500);
}
