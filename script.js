let secretNumber = Math.floor(Math.random() * 20) + 1;
let Score = 20;
let highscore = 0;

///////////////////////
let check = document.querySelector(".check");
let guessing = document.querySelector(".guessing");
let numberH = document.querySelector(".numberH");
let highScore = document.querySelector(".highScore");
let score = document.querySelector(".score");
let again = document.querySelector(".again");

///////////
check.addEventListener("click", () => {
  let number = Number(document.querySelector(".number").value);
  console.log(number);
  if (!number) {
    guessing.textContent = "No number ";
  } else if (number === secretNumber) {
    guessing.textContent = "Correct Number ";
    numberH.textContent = secretNumber;
    document.body.style.backgroundColor = "green";
    if (Score > highscore) {
      highscore = Score;
      console.log(highscore);
      highScore.textContent = highscore;
    }
  } else if (number > secretNumber) {
    if (Score > 1) {
      guessing.textContent = "Too High";
      Score--;
      score.textContent = Score;
    } else {
      guessing.textContent = "You lost the game";
      score.textContent = 0;
    }
  } else if (number < secretNumber) {
    if (Score > 1) {
      guessing.textContent = "Too Low ";
      Score--;
      score.textContent = Score;
    } else {
      guessing.textContent = "You lost the game";
      score.textContent = 0;
    }
  }
});

again.addEventListener("click", () => {
  Score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  guessing.textContent = "Start Guessing...";
  numberH.textContent = "?";
  score.textContent = Score;
  number = "";
  document.body.style.backgroundColor = "#222 ";
});
