"use strict";
const textarea = document.getElementById(`textarea`);
const button = document.getElementById(`button`);
const body = document.querySelector(`body`);

button.addEventListener("click", () => {
  const heading = document.querySelector("h2");
  if (heading) heading.remove();
  const str = textarea.value;
  if (str != 0) {
    body.insertAdjacentHTML(
      "beforeend",
      `<h2>Результат преобразования: ${operationsWisStr(str)}</h2>`
    );
  } else body.insertAdjacentHTML("beforeend", `<h2>Вы ничего не ввели!</h2>`);
});

let operationsWisStr = (str) => {
  let operStr = str.split(" ");
  let sortedStr = operStr.sort();
  console.log(sortedStr);
  let postOperStr = operStr.join(" ");
  return postOperStr;
};
console.log(operationsWisStr(str), `!!!сортировка выполнена по юникоду`);
