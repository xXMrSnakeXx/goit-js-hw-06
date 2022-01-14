function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnRef = document.querySelector(`.change-color`);
const spanRef = document.querySelector(`.color`);
btnRef.addEventListener(`click`, changesBackgroundColorOfBody);

function changesBackgroundColorOfBody(event) {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  spanRef.textContent = `${getRandomHexColor()}`;
}
