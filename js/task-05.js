const inputArea = document.getElementById("name-input");
const outputArea = document.getElementById("name-output");

function makeText(text) {
  outputArea.textContent = text.target.value;
}

inputArea.addEventListener("input", makeText);

function inputFoo() {
  if (outputArea.textContent === "") {
    outputArea.textContent = "Anonymous";
  }
}

inputArea.addEventListener("input", inputFoo);