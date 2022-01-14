const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const emailInput = event.currentTarget.elements.email.value;
  const passwordInput = event.currentTarget.elements.password.value;
  if (emailInput === ``) {
    alert(`Все поля должны быть заполнены`);
  } else if (passwordInput === ``) {
    alert(`Все поля должны быть заполнены`);
  } else {
    const email = emailInput;
    const password = passwordInput;
    const dataForm = {
      email,
      password,
    };
    console.log(dataForm);
    form.reset();
  }
}
