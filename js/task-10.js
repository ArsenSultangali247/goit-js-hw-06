function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const createBoxEl = document.querySelector("button[data-create]");
const destroyBoxEl = document.querySelector("button[data-destroy]");
const createDivEl = document.getElementById("boxes");
let divSize = 20;

function createBoxes(amount) {
  let divsEl = [];
  for (let i = 0; i < amount; i += 1) {
    divSize += 10;

    const createdDiv = document.createElement("div");
    createdDiv.style.width = `${divSize}px`;
    createdDiv.style.height = `${divSize}px`;
    createdDiv.style.backgroundColor = getRandomHexColor();

    divsEl.push(createdDiv);
  }
  createDivEl.append(...divsEl);
 
}

function destroyEl() {
  createDivEl.innerHTML = "";
  inputEl.value = "";
  divSize = 20;
}

function createItem() {
  createBoxes(inputEl.value);
}

createBoxEl.addEventListener("click", createItem);

destroyBoxEl.addEventListener("click", destroyEl);
