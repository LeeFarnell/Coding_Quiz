const goBackBtn = document.getElementById("go-back");
const clearBtn = document.getElementById("clear");

const goBack = () => {
  location.href = "/index.html";
};

const clear = () => {
  localStorage.clear();
};

goBackBtn.addEventListener("click", goBack);
clearBtn.addEventListener("click", clear);
