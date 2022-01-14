const inputRef = document.querySelector(`#font-size-control`);
const textRef = document.querySelector(`#text`);

inputRef.addEventListener(`input`, fontSizeOfText);

function fontSizeOfText(event) {
  const size = event.currentTarget.value;
  textRef.style.fontSize = `${size}px`;
}
