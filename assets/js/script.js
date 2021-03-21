const bodyElement = document.body;
const startBtnElement = document.getElementById("start-quiz-btn");
const introMain = document.getElementById("intro-section");

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

  return questionCardDiv;
};

const startGame = () => {
  console.log("START GAME");
  // remove console log
  // remove intro-section
  bodyElement.removeChild(introMain);
  // start timer (set interval fn)

  // Declare timer value

  const questionsDiv = constructQuestionCard();
  bodyElement.appendChild(questionsDiv);
};

startBtnElement.addEventListener("click", startGame);
