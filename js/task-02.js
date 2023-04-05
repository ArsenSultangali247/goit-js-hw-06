const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.getElementById("ingredients");



const createLi = ingredients.map((elem) => {
  const liElement = document.createElement("li");
  liElement.textContent = elem;
  liElement.classList = "item";
  return liElement;
});

listEl.append(...createLi);

