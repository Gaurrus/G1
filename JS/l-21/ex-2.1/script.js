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

const getTableData = async (e) => {
  setLoading();
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await response.json();
    insertTable(result);
  } catch {
    
    document.body.insertAdjacentHTML("beforeend", `<h2>Ошибка!</h2>`);
  } finally {
    button.innerHTML = "Перезагрузить";
  }
};

const setLoading = () => {
  button.innerHTML = "Загрузка...";
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
