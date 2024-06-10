

let elements = document.querySelectorAll(".object");
let result = document.querySelector(".result");
let choice = document.querySelector(".chosen");
let win = document.querySelector(".wins");
let lose = document.querySelector(".loses");
let tie = document.querySelector(".ties");
let reset = document.querySelector(".reset-btn");

let game = ["rock", "paper", "scissor"];

let winCount = 0;
let loseCount = 0;
let tieCount = 0;

const youWin = () => {
  result.innerHTML = "You Win";
  winCount++;
  win.innerHTML = `Wins: ${winCount}`;
};

const compWin = () => {
  result.innerHTML = "You Lose";
  loseCount++;
  lose.innerHTML = `Loses: ${loseCount}`;
};

const tieBreak = () => {
  result.innerHTML = "Tie";
  tieCount++;
  tie.innerHTML = `Ties: ${tieCount}`;
};

const getCompChoice = () => {
  return game[Math.floor(Math.random() * 3)];
};

elements.forEach((element) => {
  element.addEventListener("click", function () {
    let userChoice = element.getAttribute("id");
    let compChoice = getCompChoice();
    choice.innerHTML = `You<img src="Images/${userChoice}-emoji.png" class="obj"> 
    <img src="Images/${compChoice}-emoji.png" class="obj"> Comp`;

    if (userChoice === compChoice) {
      tieBreak();
    } else if (userChoice === "rock" && compChoice === "scissor") {
      youWin();
    } else if (userChoice === "rock" && compChoice === "paper") {
      compWin();
    } else if (userChoice === "paper" && compChoice === "rock") {
      youWin();
    } else if (userChoice === "paper" && compChoice === "scissor") {
      compWin();
    } else if (userChoice === "scissor" && compChoice === "paper") {
      youWin();
    } else if (userChoice === "scissor" && compChoice === "rock") {
      compWin();
    }
  });
});

reset.addEventListener("click", function () {
  winCount = 0;
  loseCount = 0;
  tieCount = 0;
  win.innerHTML = `Wins: ${winCount}`;
  lose.innerHTML = `Loses: ${loseCount}`;
  tie.innerHTML = `Ties: ${tieCount}`;
  result.innerHTML = "";
  choice.innerHTML = "";
  result.innerHTML="Result";
});
