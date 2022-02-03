const paperBtn = document.querySelector(".paper");
const rockBtn = document.querySelector(".rock");
const scissorsBtn = document.querySelector(".scissors");
const userHand = document.querySelector("#player2");
const compHand = document.querySelector("#player1");
const draw = document.querySelector("#draw");
const win = document.querySelector("#win");
const lose = document.querySelector("#lose");

let userChoose;
let compChoose;

paperBtn.addEventListener("click", () => {
  userHand.classList.add("shake");
  compHand.classList.add("shake");
  rpc = "paper";
  userChoose = 0;
  compChoose = Math.floor(Math.random() * 3);

  hideResult();

  setTimeout(function () {
    showPlayer(rpc);
  }, 1700);

  setTimeout(function () {
    showComp(compChoose);
  }, 1700);

  setTimeout(function () {
    showResult(userChoose, compChoose);
  }, 2050);
});

rockBtn.addEventListener("click", () => {
  userHand.classList.add("shake");
  compHand.classList.add("shake");
  rpc = "rock";
  userChoose = 1;
  compChoose = Math.floor(Math.random() * 3);

  hideResult();

  setTimeout(function () {
    showPlayer(rpc);
  }, 1700);

  setTimeout(function () {
    showComp(compChoose);
  }, 1700);

  setTimeout(function () {
    showResult(userChoose, compChoose);
  }, 2050);
});

scissorsBtn.addEventListener("click", () => {
  userHand.classList.add("shake");
  compHand.classList.add("shake");
  rpc = "scissors";
  userChoose = 2;
  compChoose = Math.floor(Math.random() * 3);

  hideResult();

  setTimeout(function () {
    showPlayer(rpc);
  }, 1700);

  setTimeout(function () {
    showComp(compChoose);
  }, 1700);

  setTimeout(function () {
    showResult(userChoose, compChoose);
  }, 2050);
});

function showPlayer(rpc) {
  userHand.className = "";
  userHand.classList.add("player", `${rpc}`);
}

function showComp(compChoose) {
  let compDecision;

  if (compChoose === 0) {
    compDecision = "paper";
  } else if (compChoose === 1) {
    compDecision = "rock";
  } else if (compChoose === 2) {
    compDecision = "scissors";
  }

  compHand.className = "";
  compHand.classList.add("player", `${compDecision}`);
}

function showResult(a, b) {
  if (a === b) {
    draw.classList.toggle("hidden");
  } else if (
    (a === 0 && b === 1) ||
    (a === 1 && b === 2) ||
    (a === 2 && b === 0)
  ) {
    win.classList.toggle("hidden");
  } else lose.classList.toggle("hidden");
}

function hideResult() {
  if (!draw.classList.contains("hidden")) {
    draw.classList.toggle("hidden");
  } else if (!win.classList.contains("hidden")) {
    win.classList.toggle("hidden");
  } else if (!lose.classList.contains("hidden")) {
    lose.classList.toggle("hidden");
  }
}
