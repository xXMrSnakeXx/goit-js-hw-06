const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);
const valueRef = document.querySelector(`#value`);

const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

decrementBtn.addEventListener(`click`, onDecrementBtnClick);

incrementBtn.addEventListener(`click`, onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValue.decrement();
  valueRef.textContent = counterValue.value;
}

function onIncrementBtnClick() {
  counterValue.increment();
  valueRef.textContent = counterValue.value;
}
