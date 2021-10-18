"use strict";

const input = document.getElementById("input");
const button = document.getElementById("button");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  const heading = document.querySelector("h2");
  if (heading) heading.remove();
  const email = input.value;
  if (email != 0) {
    let result = checkEmail(email);
    body.insertAdjacentHTML("beforeend", `<h2>${result}</h2>`);
  } else body.insertAdjacentHTML("beforeend", `<h2>Вы ничего не ввели!</h2>`);
});

let checkEmail = (email) => {
  let lengthOfStr = email.length;
  for (let char of email) {
    if (email.includes("@")) {
      let positionOfDog = email.indexOf("@", 0);
      console.log(positionOfDog);
      let positionStart = positionOfDog + 1;
      let resultDomain = email.slice(positionStart);
      return `Домен сервера ${resultDomain}`;
    }
  }
  return `Введен некорректный адрес!`;
};
