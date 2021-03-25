const bodyElement = document.body;
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
    const resultsEmpty = noResults();
    bodyElement.appendChild(resultsEmpty);
    console.log("empty");
  } else {
    const showResults = resultsTable();
    bodyElement.appendChild(showResults);
    console.log("create table");
  }
};

const noResults = () => {
  const noResultsDiv = document.createElement("div");
  noResultsDiv.setAttribute("id", "results-div");

  const noResultsH2 = document.createElement("h2");
  noResultsH2.textContent = "No results to show.";

  noResultsDiv.appendChild(noResultsH2);

  return noResultsDiv;
};

const resultsTable = () => {
  const tableDiv = document.createElement("div");
  tableDiv.setAttribute("id", "table");

  const resultDiv = document.createElement("div");
  resultDiv.setAttribute("id", "results");
  resultDiv.textContent = getFromLocalStorage();

  tableDiv.appendChild(resultDiv);

  return tableDiv;
};

const onLoad = () => {
  const highScores = getFromLocalStorage();
  renderHighScoresTable(highScores);
};

goBackBtn.addEventListener("click", goBack);
clearBtn.addEventListener("click", clear);

window.addEventListener("load", onLoad);
