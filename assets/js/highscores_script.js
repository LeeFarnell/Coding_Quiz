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

  const goBackBtn = document.createElement("button");
  goBackBtn.setAttribute("id", "go-back");
  goBackBtn.addEventListener("click", goBack);
  goBackBtn.textContent = "Go Back";

  const clearBtn = document.createElement("button");
  clearBtn.setAttribute("id", "clear");
  clearBtn.addEventListener("click", clear);
  clearBtn.textContent = "Clear";

  noResultsDiv.append(noResultsH2, goBackBtn, clearBtn);

  return noResultsDiv;
};

const resultsTable = () => {
  const tableDiv = document.createElement("div");
  tableDiv.setAttribute("id", "table");

  const resultList = document.createElement("ul");
  resultList.setAttribute("id", "results-list");

  const listItem = document.createElement("li");
  listItem.setAttribute("id", "list-item");
  listItem.textContent = JSON.parse(window.localStorage.getItem("highScores"));

  const goBackBtn = document.createElement("button");
  goBackBtn.setAttribute("id", "go-back");
  goBackBtn.addEventListener("click", goBack);
  goBackBtn.textContent = "Go Back";

  const clearBtn = document.createElement("button");
  clearBtn.setAttribute("id", "clear");
  clearBtn.addEventListener("click", clear);
  clearBtn.textContent = "Clear";

  tableDiv.append(resultList, listItem, goBackBtn, clearBtn);

  return tableDiv;
};

const onLoad = () => {
  const highScores = getFromLocalStorage();
  renderHighScoresTable(highScores);
};

window.addEventListener("load", onLoad);
