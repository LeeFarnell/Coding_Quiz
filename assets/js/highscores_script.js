const bodyElement = document.body;
const goBackBtn = document.getElementById("go-back");
const clearBtn = document.getElementById("clear");

const getFromLocalStorage = () => {
  const highScores = localStorage.getItem("highScores");
  const highScoresArray = JSON.parse(highScores);
  if (highScores) {
    // Sort the high scores into a new array...
    const sortFunction = (firstEl, secondEl) => {
      const firstElValue = firstEl[1];
      const secondElValue = secondEl[1];

      return secondElValue - firstElValue;
    };
    highScoresArray.sort(sortFunction);
    return highScoresArray;
  } else {
    return [];
  }
};

const renderHighScoresTable = (highScores) => {
  if (highScores.length === 0) {
    const resultsEmpty = noResults();
    bodyElement.appendChild(resultsEmpty);
  } else {
    const showResults = resultsTable(highScores);
    bodyElement.appendChild(showResults);
  }
};

const resultsTable = (highScores) => {
  const tableDiv = document.createElement("div");
  tableDiv.setAttribute("id", "table");

  const resultList = document.createElement("ul");
  resultList.setAttribute("id", "results-list");

  highScores.forEach(function (highScores) {
    const listItem = document.createElement("li");
    listItem.setAttribute("id", "list-item");
    listItem.append(highScores);
    resultList.append(listItem);
    return highScores;
  });

  const goBackBtn = document.createElement("button");
  goBackBtn.setAttribute("id", "go-back");
  goBackBtn.addEventListener("click", goBack);
  goBackBtn.textContent = "Go Back";

  const clearBtn = document.createElement("button");
  clearBtn.setAttribute("id", "clear");
  clearBtn.addEventListener("click", clear);
  clearBtn.textContent = "Clear";

  tableDiv.append(resultList, goBackBtn, clearBtn);

  return tableDiv;
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

const onLoad = () => {
  const highScores = getFromLocalStorage();
  renderHighScoresTable(highScores);
};

const goBack = () => {
  location.href = "/index.html";
};

const clear = () => {
  localStorage.clear();
  const resultsTable = document.getElementById("table");
  bodyElement.removeChild(resultsTable);

  const noResult = noResults();
  bodyElement.appendChild(noResult);
};

window.addEventListener("load", onLoad);
