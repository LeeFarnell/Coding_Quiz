const bodyElement = document.body;
const startBtnElement = document.getElementById("start-quiz-btn");
const introMain = document.getElementById("intro-section");
const timerSpan = document.getElementById("timer");
const questionOne = ["No", "No", "Yes", "No"];
let timerValue = 5;

const startTimer = () => {
  const countdown = () => {
    timerValue -= 1;
    timerSpan.textContent = timerValue;

    if (timerValue === 0) {
      clearInterval(timer);

      const questionCardID = document.getElementById("question-card");
      bodyElement.removeChild(questionCardID);

      const gameOverContainer = constructGameOver();
      bodyElement.appendChild(gameOverContainer);
    }
  };
  const timer = setInterval(countdown, 1000);
};

const constructQuestionCard = () => {
  const questionCardDiv = document.createElement("div");
  questionCardDiv.setAttribute("id", "question-card");

  const h2Element = document.createElement("h2");
  h2Element.textContent = "Question Here";

  const btnElement1 = document.createElement("button");
  btnElement1.setAttribute("id", "Answer-One");
  btnElement1.textContent = questionOne[0];
  const btnElement2 = document.createElement("button");
  btnElement2.setAttribute("id", "Answer-Two");
  btnElement2.textContent = questionOne[1];
  const btnElement3 = document.createElement("button");
  btnElement3.setAttribute("id", "Answer-Three");
  btnElement3.textContent = questionOne[2];
  const btnElement4 = document.createElement("button");
  btnElement4.setAttribute("id", "Answer-Four");
  btnElement4.textContent = questionOne[3];

  // Is the below needed?
  const statusDiv = document.createElement("div");
  statusDiv.textContent = "Right or Wrong?";

  questionCardDiv.append(
    h2Element,
    btnElement1,
    btnElement2,
    btnElement3,
    btnElement4,
    statusDiv
  );

  // create and declare a right answer  (move onto next set of questions)
  // create and declare a wrong answer function (deduct time by 5 seconds)
  // add event listeners to buttons

  return questionCardDiv;
};

const endGameCard = () => {
  const endGameDiv = document.createElement("div");
  endGameDiv.setAttribute("id", "end-game");

  const h2EndGame = document.createElement("h2");
  h2EndGame.textContent = "Congratulations!";

  const enterName = document.createElement("input");
  enterName.textContent = "Name here";

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit Score";

  endGameDiv.append(h2EndGame, enterName, submitBtn);

  return endGameDiv;
};

const constructGameOver = () => {
  const gameOverDiv = document.createElement("div");
  gameOverDiv.setAttribute("id", "game-over");

  const h2GameOverElement = document.createElement("h2");
  h2GameOverElement.textContent = "GAME OVER";

  const btnElementTryAgain = document.createElement("button");
  btnElementTryAgain.textContent = "Try Again";

  gameOverDiv.append(h2GameOverElement, btnElementTryAgain);
  btnElementTryAgain.addEventListener("click", tryAgain);

  return gameOverDiv;
};

const startGame = () => {
  console.log("START GAME");
  // remove console log
  // remove intro-section
  bodyElement.removeChild(introMain);
  // start timer (set interval fn)
  startTimer();
  // Declare timer value

  const questionsDiv = constructQuestionCard();
  bodyElement.appendChild(questionsDiv);
};

const tryAgain = () => {
  const gameOverID = document.getElementById("game-over");

  bodyElement.removeChild(gameOverID);
  bodyElement.appendChild(introMain);
  timerValue = 5;
};

// construct and build function for End Game. Must show inputs to allow high score entry
// create arrays for questions and answers
// Research how to update questionCardDiv if right answer is selected.
// Style with CSS (DO THIS LAST!)

startBtnElement.addEventListener("click", startGame);
