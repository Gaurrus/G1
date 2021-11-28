"use strict";

const button = document.querySelector("button");

const setTr = (post) => {
  const tr = document.createElement("tr");
  Object.values(post).forEach((item) => {
    tr.insertAdjacentHTML("beforeend", `<td>${item}</td>`);
  });
  return tr;
};

const insertTable = (posts) => {
  const table = document.createElement("table");
  const tr = document.createElement("tr");

  Object.keys(posts[0]).forEach((item) => {
    tr.insertAdjacentHTML("beforeend", `<th>${item}</th>`);
  });
  table.append(tr);
  posts.forEach((post) => {
    table.append(setTr(post));
  });

  document.body.append(table);
};

// const getTableData = async (e) => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const result = await response.json();
//     insertTable(result);
//   } catch {
//     // removeText();
//     document.body.insertAdjacentHTML("beforeend", `<h2>Ошибка!</h2>`);
//   }
// };

const getTableData = async (e) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const reader = response.body.getReader();

  let receivedLength = 0;
  let chunks = [];
  while (true) {
    button.textContent = "Загрузка...";
    const { done, value } = await reader.read();

    if (done) {
      button.textContent = "Перезагрузить";
      break;
    }
    chunks.push(value);
    receivedLength += value.length;
  }
  let chunksAll = new Uint8Array(receivedLength);
  let position = 0;
  for (let chunk of chunks) {
    chunksAll.set(chunk, position);
    position += chunk.length;
  }
  let resultOne = new TextDecoder("utf-8").decode(chunksAll);
  let result = JSON.parse(resultOne);
  insertTable(result);
};

const removeText = () => {
  const removableText = document.querySelector("h2");
  const removableTable = document.querySelector("table");
  if (removableText) {
    removableText.remove();
  }
  if (removableTable) {
    removableTable.remove();
  }
};

button.addEventListener("click", () => {
  removeText();
  getTableData();
});
