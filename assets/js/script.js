const startBtnElement = document.getElementById("start-quiz-btn");

const constructQuestionCard = () => {
  const questionCardDiv = document.createElement("main");
  questionCardDiv.setAttribute("class", "question-card");

  const h2Element = document.createElement("h2");
  h2Element.textContent = "Question Here";
  const btnElement = document.createElement("button");
  btnElement.textContent = "Answer One";
  const statusDiv = document.createElement("div");
  statusDiv.textContent = "Right or Wrong?";

  questionCardDiv.append(h2Element, btnElement, statusDiv);

  return questionCardDiv;
};

const startGame = () => {
  console.log("START GAME");
  // remove console log
  // remove intro-section
  // start timer (set interval fn)
  // Declare timer value

  const questionsDiv = constructQuestionCard();
  console.log(questionsDiv);
};

startBtnElement.addEventListener("click", startGame);
