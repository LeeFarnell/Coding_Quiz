const bodyElement = document.body;
const startBtnElement = document.getElementById("start-quiz-btn");
const introMain = document.getElementById("intro-section");
const timerSpan = document.getElementById("timer");
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
  btnElement1.textContent = "Answer #1";
  const btnElement2 = document.createElement("button");
  btnElement2.textContent = "Answer #2";
  const btnElement3 = document.createElement("button");
  btnElement3.textContent = "Answer #3";
  const btnElement4 = document.createElement("button");
  btnElement4.textContent = "Answer #4";

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
