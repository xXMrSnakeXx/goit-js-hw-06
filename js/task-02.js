const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector(`#ingredients`);

const listOfIngredients = ingredients.map((ingredient) => {
  const ingreedientLi = document.createElement(`li`);
  ingreedientLi.textContent = ingredient;
  ingreedientLi.classList.add(`item`);

  return ingreedientLi;
});

ingredientsRef.append(...listOfIngredients);
