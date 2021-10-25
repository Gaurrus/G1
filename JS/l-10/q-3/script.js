"use strict";

const textarea = document.getElementById("textarea");
const button = document.getElementById("button");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  const heading = document.querySelector("h2");
  if (heading) heading.remove();
  const bigText = textarea.value;
  if (bigText != 0) {
    let result = countWords(bigText);
    body.insertAdjacentHTML(
      "beforeend",
      `<h2>Количество слов во введенном тексте равно ${result}</h2>`
    );
  } else body.insertAdjacentHTML("beforeend", `<h2>Вы ничего не ввели!</h2>`);
});

// это простой способ, от колчества пробелов с минимум защит от дурака

// let checkNumberOfWords = (bigText) => {
//   let wordNumber = 0;
//   for (let char of bigText.trim())
//     if (char == " ") {
//       wordNumber++;
//     }
//   return wordNumber = wordNumber + 1;
// };

function countWords(bigText) {
  return bigText.trim().split(/\s+/).length; // /\s+/ регулярное выражение ult /s символ соответствующий одиночному пустому символу, а + соответствует предыдущему повторенному 1 и более раз
}

// таким способом считает правильно слова, но если остается например запятая между пробелами " , ", то ее тоже посчитает как отдельное слово
