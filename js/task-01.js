const allCategoriesRef = document.querySelectorAll(`ul#categories li.item`);
const numberOfCategories = allCategoriesRef.length;
console.log(`Number of categories: ${numberOfCategories}`);

allCategoriesRef.forEach((element) => {
  const titleText = element.querySelector(`h2`).textContent;
  console.log(`Category: ${titleText}`);
  const elementsRef = element.querySelectorAll(`li`);
  console.log(`Elements: ${elementsRef.length}`);
});
