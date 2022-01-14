function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const divBoxRef = document.querySelector(`#boxes`);
const allBtnRef = document.querySelectorAll(`#controls button`);
const inputRef = document.querySelector(`#controls input`);

allBtnRef[0].addEventListener(`click`, createBoxes);
allBtnRef[1].addEventListener(`click`, destroyBoxes);

function createBoxes(amount) {
  amount = inputRef.value;
  const arrayItems = [];
  let size;
  for (let i = 0; i < amount; i += 1) {
    size = 30 + i * 10;
    const divItem = document.createElement("div");
    divItem.style.width = `${size}px`;
    divItem.style.height = `${size}px`;
    divItem.style.backgroundColor = getRandomHexColor();
    arrayItems.push(divItem);
  }
  return divBoxRef.append(...arrayItems);
}

function destroyBoxes() {
  divBoxRef.innerHTML = ``;
}
