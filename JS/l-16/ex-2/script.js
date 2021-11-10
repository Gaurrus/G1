"use strict";

const input = document.querySelector(`.input`);

const inputValue = () => {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let sec = new Date().getSeconds();
  input.value = `${hours}.${minutes}.${sec}`;
  const remove = document.body.querySelector(`h1`);
  if (remove) {
    remove.remove();
  }
  document.body.insertAdjacentHTML(
    `beforeend`,
    `<h1>${hours}.${minutes}.${sec}</h1>`
  );
};

setInterval(inputValue, 1000);
