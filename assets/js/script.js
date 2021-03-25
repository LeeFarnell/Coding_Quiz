const bodyElement = document.body;
const startBtnElement = document.getElementById("start-quiz-btn");
const introMain = document.getElementById("intro-section");
const timerSpan = document.getElementById("timer");
const questionOne = ["Is this question a test?", "No", "No", "Yes", "No"];
const questionTwo = ["Is this question 2 a test?", "No", "Yes", "No", "No"];
const questionThree = ["Is this question 3 a test?", "No", "No", "No", "Yes"];
const questionFour = ["Is this question 4 a test?", "Yes", "No", "No", "No"];
const questionFive = ["Is this question 5 a test?", "No", "Yes", "No", "No"];
let timerValue = 30;
let questionValue = 0;

const getHighScores = () => {
  const highScores = localStorage.getItem("highScores");

  if (highScores) {
    return JSON.parse(highScores);
  } else {
    return [];
  }
};

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
    } else if (timerValue < 0) {
      clearInterval(timer);

      const questionCardID = document.getElementById("question-card");
      bodyElement.removeChild(questionCardID);

      const gameOverContainer = constructGameOver();
      bodyElement.appendChild(gameOverContainer);
      timerSpan.textContent = 0;
    } else if (questionValue === 6) {
      clearInterval(timer);
    }
  };
  const timer = setInterval(countdown, 1000);
};

const constructQuestionCard = () => {
  const questionCardDiv = document.createElement("div");
  questionCardDiv.setAttribute("id", "question-card");

  const h2Element = document.createElement("h2");
  h2Element.textContent = questionOne[0];

  const btnElement1 = document.createElement("button");
  btnElement1.setAttribute("id", "Answer-One");
  btnElement1.textContent = questionOne[1];
  const btnElement2 = document.createElement("button");
  btnElement2.setAttribute("id", "Answer-Two");
  btnElement2.textContent = questionOne[2];
  const btnElement3 = document.createElement("button");
  btnElement3.setAttribute("id", "Answer-Three");
  btnElement3.textContent = questionOne[3];
  const btnElement4 = document.createElement("button");
  btnElement4.setAttribute("id", "Answer-Four");
  btnElement4.textContent = questionOne[4];

  // // Is the below needed?
  // const statusDiv = document.createElement("div");
  // statusDiv.textContent = "Right or Wrong?";

  questionCardDiv.append(
    h2Element,
    btnElement1,
    btnElement2,
    btnElement3,
    btnElement4
    // statusDiv
  );

  questionValue += 1;
  console.log(questionValue);

  const Answer1 = () => {
    h2Element.textContent = questionTwo[0];
    btnElement1.textContent = questionTwo[1];
    btnElement2.textContent = questionTwo[2];
    btnElement3.textContent = questionTwo[3];
    btnElement4.textContent = questionTwo[4];

    btnElement2.removeEventListener("click", incorrect);
    btnElement3.removeEventListener("click", Answer1);

    btnElement2.addEventListener("click", Answer2);
    btnElement3.addEventListener("click", incorrect);
    questionValue += 1;
    console.log(questionValue);
  };

  const Answer2 = () => {
    h2Element.textContent = questionThree[0];
    btnElement1.textContent = questionThree[1];
    btnElement2.textContent = questionThree[2];
    btnElement3.textContent = questionThree[3];
    btnElement4.textContent = questionThree[4];

    btnElement2.removeEventListener("click", Answer2);
    btnElement4.removeEventListener("click", incorrect);

    btnElement2.addEventListener("click", incorrect);
    btnElement4.addEventListener("click", Answer3);
    questionValue += 1;
    console.log(questionValue);
  };

  const Answer3 = () => {
    h2Element.textContent = questionFour[0];
    btnElement1.textContent = questionFour[1];
    btnElement2.textContent = questionFour[2];
    btnElement3.textContent = questionFour[3];
    btnElement4.textContent = questionFour[4];

    btnElement1.removeEventListener("click", incorrect);
    btnElement4.removeEventListener("click", Answer3);

    btnElement1.addEventListener("click", Answer4);
    btnElement4.addEventListener("click", incorrect);
    questionValue += 1;
    console.log(questionValue);
  };

  const Answer4 = () => {
    h2Element.textContent = questionFive[0];
    btnElement1.textContent = questionFive[1];
    btnElement2.textContent = questionFive[2];
    btnElement3.textContent = questionFive[3];
    btnElement4.textContent = questionFive[4];

    btnElement1.removeEventListener("click", Answer4);
    btnElement2.removeEventListener("click", incorrect);

    btnElement1.addEventListener("click", incorrect);
    btnElement2.addEventListener("click", Answer5);
    questionValue += 1;
    console.log(questionValue);
  };

  const Answer5 = () => {
    const questionCardID = document.getElementById("question-card");
    bodyElement.removeChild(questionCardID);

    const endGameContainer = endGameCard();
    bodyElement.appendChild(endGameContainer);
    questionValue += 1;
    console.log(questionValue);
  };

  const incorrect = () => {
    timerValue -= 10;
    if (timerValue === 0) {
      clearInterval(timer);
    }
  };

  btnElement1.addEventListener("click", incorrect);
  btnElement2.addEventListener("click", incorrect);
  btnElement3.addEventListener("click", Answer1);
  btnElement4.addEventListener("click", incorrect);

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
  enterName.setAttribute("id", "player-name");
  enterName.setAttribute("placeholder", "Enter your Name");

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit Score";
  submitBtn.addEventListener("click", submitScore);

  endGameDiv.append(h2EndGame, enterName, submitBtn);

  return endGameDiv;
};

let submitScore = (event) => {
  event.preventDefault();
  const name = document.querySelector("#player-name").value;
  const score = timerValue;

  const finalScore = [name, score];

  const highScore = getHighScores();
  highScore.push(finalScore);
  localStorage.setItem("highScores", JSON.stringify(highScore));

  location.href = "/high-scores.html";

  console.log(highScore);

  // Store list of high scores in local storage (array)
  // Must display scores in order.
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
  timerValue = 30;
  questionValue = 0;
};

// construct and build function for End Game. Must show inputs to allow high score entry
// create arrays for questions and answers
// Research how to update questionCardDiv if right answer is selected.
// Style with CSS (DO THIS LAST!)

startBtnElement.addEventListener("click", startGame);
