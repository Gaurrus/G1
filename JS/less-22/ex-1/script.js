"use strict";

const button = document.querySelector("button");

const setTr = (post) => {
  const tr = document.createElement("tr");
  Object.values(post).forEach((item) => {
    tr.insertAdjacentHTML("beforeend", `<td><textarea>${item}</textarea></td>`);
  });
  return tr;
};

const insertTable = (posts) => {
  const table = document.createElement("table");
  const form = document.createElement("form");
  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  const tr = document.createElement("tr");

  Object.keys(posts[0]).forEach((item) => {
    tr.insertAdjacentHTML("beforeend", `<th><textarea>${item}</textarea></th>`);
  });
  table.append(tr);
  posts.forEach((post) => {
    table.append(setTr(post));
  });
  form.append(table);
  form.append(submit);
  document.body.append(form);
};

const getTableData = (e) => {
  try {
    setLoading();
    Promise.all([
      new Promise((resolve) => setTimeout(() => resolve(null), 3000)),
      fetch("https://jsonplaceholder.typicode.com/posts"),
    ])
      .then((response) => response[1].json())
      .then((result) => {
        setLoading();
        insertTable(result);
        button.innerHTML = "Данные загружены";
        button.setAttribute("disabled", true);
      });
  } catch {
    document.body.insertAdjacentHTML("beforeend", `<h2>Ошибка!</h2>`);
  } finally {
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
