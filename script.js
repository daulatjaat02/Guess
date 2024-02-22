"use strict";

let numberH = document.querySelector(".numberH");
let EnterNumber = document.querySelector(".number");
let guessingText = document.querySelector(".guessing");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highScore");
// buttons
let check = document.querySelector(".check");
let again = document.querySelector(".again");
// defaults
let secretNumber = +Math.floor(Math.random() * 100) + 1;
let scoreNum = 100;
let highScoreNum = 0;

// functions

let scoreDecrese = function () {
  scoreNum--;
  score.textContent = scoreNum;
};

let checkSecretNumber = function () {
  let number = +EnterNumber.value;

  if (!number || number < 0 || number > 100) {
    guessingText.textContent = " Invalid Number❌ ";
    scoreDecrese();
  }
  else if (number === secretNumber) {
    numberH.textContent = secretNumber;
    guessingText.textContent = "Correct Number 🎉✅ ";
    document.body.style.backgroundColor = "green";
    if (scoreNum > highScoreNum) {
      highScoreNum = scoreNum;
      highScore.textContent = scoreNum;
    }
  }
  else if (number > 1) {
    guessingText.textContent =
      number > secretNumber ? "Value is too High ❗❗" : "Value is too Low ❗❗";
    scoreDecrese();
  }
  else {
    guessingText.textContent = "You lost the game 😔 ";
    score.textContent = 0;
  }
  EnterNumber.value = '';
};

let AgainSet = function () {
  scoreNum = 100;
  secretNumber = Math.floor(Math.random() * 100) + 1;
  numberH.textContent = "?";
  document.body.style.backgroundColor = "rgb(46, 42, 42)";
  score.textContent = scoreNum;
  guessingText.textContent = "Start Guessing... ⚡";
  EnterNumber.value = "";
  EnterNumber.focus();
};

let Enterbtn = function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    checkSecretNumber();
  }
};

check.addEventListener("click", checkSecretNumber);
again.addEventListener("click", AgainSet);
EnterNumber.addEventListener("keydown", Enterbtn);
