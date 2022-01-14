const inputRef = document.querySelector(`#name-input`);
const outputRef = document.querySelector(`#name-output`);
const outputText = outputRef.textContent;

inputRef.addEventListener(`input`, onInputChange);

function onInputChange(event) {
  return event.currentTarget.value !== ``
    ? (outputRef.textContent = event.currentTarget.value)
    : (outputRef.textContent = outputText);
}
