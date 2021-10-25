const inputFirst = document.getElementById("input-first");
const inputSecond = document.getElementById("input-second");
const buttonPlus = document.getElementById("button-plus");
const buttonMinus = document.getElementById("button-minus");
const buttonMulti = document.getElementById("button-multiple");
const buttonDivision = document.getElementById("button-division");
const div = document.querySelector('div');
console.log(div);

buttonPlus.addEventListener("click", () => {
  const heading = document.querySelector("h2");
  if (heading) heading.remove();
  let numOne = +inputFirst.value;
  let numTwo = +inputSecond.value;
  let result = numOne + numTwo;
  console.log(result);
  div.insertAdjacentHTML('beforeend', `<h2>${result}</h2>`);
});
