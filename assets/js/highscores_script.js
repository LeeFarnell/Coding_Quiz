const goBackBtn = document.getElementById("go-back");
const clearBtn = document.getElementById("clear");

const goBack = () => {
  location.href = "/index.html";
};

const clear = () => {
  localStorage.clear();
  onLoad();
};

const getFromLocalStorage = () => {
  const highScores = localStorage.getItem("highScores");
  if (highScores) {
    return highScores;
  } else {
    return [];
  }
};

const renderHighScoresTable = (highScores) => {
  if (highScores.length === 0) {
    console.log("empty");
  } else {
    console.log("create table");
  }
};

const onLoad = () => {
  const highScores = getFromLocalStorage();
  renderHighScoresTable(highScores);
};

goBackBtn.addEventListener("click", goBack);
clearBtn.addEventListener("click", clear);

window.addEventListener("load", onLoad);
