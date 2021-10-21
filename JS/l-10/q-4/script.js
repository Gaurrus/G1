"use strict";

const input = document.getElementById("input");
const button = document.getElementById("button");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  const heading = document.querySelector("h2");
  if (heading) heading.remove();
  const money = input.value;
  if (money != 0) {
    let result = calcDubleMoney(money);
    body.insertAdjacentHTML(
      "beforeend",
      `<h2>Ваш кэш увеличен в 2 раза и становится ${result}</h2>`
    );
  } else body.insertAdjacentHTML("beforeend", `<h2>Вы ничего не ввели!</h2>`);
});

let calcDubleMoney = (money) => {
  for (let char of money) {
    if (money.includes("$")) {
      let number = +parseInt(money);
      return (number = `${number * 2} $`);
    } else if (money.includes("руб.") || money.includes("руб")) {
      let number = +parseInt(money);
      return (number = `${number * 2} руб.`);
    }
  }
};
