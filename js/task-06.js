const validationInputRef = document.querySelector(`#validation-input`);

validationInputRef.addEventListener(`blur`, borderColorOfValidatorInput);

function borderColorOfValidatorInput(event) {
  return validationInputRef.value.length ===
    Number(validationInputRef.dataset.length)
    ? validationInputRef.setAttribute(`class`, `valid`)
    : validationInputRef.setAttribute(`class`, `invalid `);
}
