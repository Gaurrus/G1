"use strict";

const textarea = document.querySelector("textarea");

const checkFault = () => {
  if (textarea.value.length == "") {
    return true;
  } else false;
};

const removeText = () => {
  const text = document.querySelectorAll("h2");
  text.forEach((element) => {
    if (element) element.remove();
  });
};

const findWords = () => {
  const result = textarea.value.trim().split(/\s+/).length;
  textarea.value = `Количество слов во введенном тексте = ${result}, всего символов ${
    textarea.value.length
  }, без пробелов ${textarea.value.length - result}`;
};

textarea.addEventListener("focusout", () => {
  if (checkFault()) {
    textarea.value = "Ошибка!";
  } else findWords();
});
