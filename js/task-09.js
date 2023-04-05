function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body')
const buttonEl = document.querySelector('.change-color')
const txtColor = document.querySelector('.color')

buttonEl.addEventListener('click', changeColor)

function changeColor(){
  bodyEl.style.backgroundColor = getRandomHexColor();
  txtColor.textContent = bodyEl.style.backgroundColor
 
}