const inputEl = document.getElementById("font-size-control");
const txtSize = document.getElementById('text')

function changeFontSize(val){
    txtSize.style.fontSize = `${val.target.value}px`;
    
}
inputEl.addEventListener('input', changeFontSize)

