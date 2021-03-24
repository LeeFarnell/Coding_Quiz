const goBackBtn = document.getElementById("go-back");

const goBack = () => {
  location.href = "/index.html";
};

goBackBtn.addEventListener("click", goBack);
