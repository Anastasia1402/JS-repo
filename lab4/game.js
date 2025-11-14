document.addEventListener("DOMContentLoaded", function() {
  const startScreen = document.getElementById("startScreen");
  const startButton = document.getElementById("startButton");
  const difficultySelect = document.getElementById("difficultySelect");
  const colorSelect = document.getElementById("colorSelect");

  const gameArea = document.getElementById("gameArea");
  const target = document.getElementById("target");
  const scoreDisplay = document.getElementById("score");
  const timeLeftDisplay = document.getElementById("timeLeft");

  let score = 0;
  let timePerClick;
  let intervalId;
  let countdownId;

  startButton.addEventListener("click", () => {
    score = 0;
    scoreDisplay.textContent = score;


    timePerClick = parseInt(difficultySelect.value, 10);
    const selectedColor = colorSelect.value;


    startScreen.style.display = "none";
    target.style.backgroundColor = selectedColor;
    target.style.display = "block";

    startGame();
  });

  function startGame() {
    nextRound();

    target.addEventListener("click", onTargetClick);
  }

  function nextRound() {
    clearInterval(intervalId);
    clearInterval(countdownId);
    timeLeft = timePerClick;
    timeLeftDisplay.textContent = timeLeft;

    moveTarget();

    countdownId = setInterval(() => {
      timeLeft--;
      timeLeftDisplay.textContent = timeLeft;
      if (timeLeft <= 0) {
        gameOver();
      }
    }, 1000);
  }

  function moveTarget() {
    const maxX = gameArea.clientWidth - target.clientWidth;
    const maxY = gameArea.clientHeight - target.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    target.style.left = randomX + "px";
    target.style.top = randomY + "px";
  }

  function onTargetClick() {
    score++;
    scoreDisplay.textContent = score;
    nextRound();
  }

  function gameOver() {
    clearInterval(countdownId);
    target.style.display = "none";
    target.removeEventListener("click", onTargetClick);
    alert(`Гру завершено. Ви програли! Ваш рахунок: ${score}`);


    startScreen.style.display = "block";
    timeLeftDisplay.textContent = "";
  }
});

