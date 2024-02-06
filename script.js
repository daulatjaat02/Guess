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
let secretNumber = +Math.floor(Math.random() * 20) + 1;
let scoreNum = 20;
let highScoreNum = 0;

// functions
let highLow = function (num, secretNum) {
  if (scoreNum > 1) {
    guessingText.textContent =
      num > secretNum ? "Value is too High ⬆ " : "Value is too Low ⬇  ";
    scoreNum--;
    score.textContent = scoreNum;
  } else {
    guessingText.textContent = "You lost the game 😔 ";
    score.textContent = 0;
  }
};

let checkSecretNumber = function () {
  let number = +EnterNumber.value;

  if (!number || number < 1 || number > 20) {
    guessingText.textContent = " No Number ❌ ";
  }

  if (number === secretNumber) {
    numberH.textContent = secretNumber;
    guessingText.textContent = "Correct Number 🎉✅ ";
    document.body.style.backgroundColor = "green";
    if (scoreNum > highScoreNum) {
      highScoreNum = scoreNum;
      highScore.textContent = scoreNum;
    }
  } else {
    highLow(number, secretNumber);
  }
};

let AgainSet = function () {
  scoreNum = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  numberH.textContent = "?";
  document.body.style.backgroundColor = "#222";
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
