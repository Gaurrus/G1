"use strict";
const button = document.querySelector(`button`);

const getTableData = async (e) => {
  e.preventDefault();
  console.log(`hallo`);
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  if (response.ok) {
    const result = await response.json();
    console.log(result);
    insertTable(result);
  }
  console.log(`error`);
};

button.addEventListener("click", getTableData);

const insertTable = () => {};

const setTr = () => {
  const tr = document.createElement(`tr`);
  Object.keys(posts[0]).forEach((key) => {
    tr.insertAdjacentHTML(`beforeend`, `<th>${key}</th>`);
  });
  return tr;
};
