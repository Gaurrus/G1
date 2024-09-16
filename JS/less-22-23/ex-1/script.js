"use strict";

const button = document.querySelector("button");
const form = document.createElement("form");
const submit = document.createElement("input");
const table = document.createElement("table");
form.setAttribute("class", "form");
submit.setAttribute("type", "submit");
submit.setAttribute("class", "button");
submit.setAttribute("disabled", true);
const tr = document.createElement("tr");
let focusInValue;
let focusOutValue;

const setTr = (post, indexTD) => {
  const tr = document.createElement("tr");
  Object.values(post).forEach((item, indexTR) => {
    tr.insertAdjacentHTML(
      "beforeend",
      `<td><textarea name=${`row-${indexTD}-coll-${indexTR}`}>${item}</textarea></td>`
    );
  });
  return tr;
};

const insertTable = (posts) => {
  const table = document.createElement("table");
  form.setAttribute("class", "form");
  submit.setAttribute("type", "submit");
  submit.setAttribute("class", "button");
  submit.setAttribute("disabled", true);
  const tr = document.createElement("tr");

  Object.keys(posts[0]).forEach((item, index) => {
    tr.insertAdjacentHTML(
      "beforeend",
      `<th><textarea name=head-${index}>${item}</textarea></th>`
    );
  });
  table.append(tr);
  posts.forEach((post, indexTD) => {
    table.append(setTr(post, indexTD));
  });
  form.append(table);
  form.append(submit);
  document.body.append(form);
};

const getTableData = (e) => {
  try {
    setLoading();
    Promise.all([
      new Promise((resolve) => setTimeout(() => resolve(null), 1000)),
      fetch("https://jsonplaceholder.typicode.com/posts"),
    ])
      .then((response) => response[1].json())
      .then((result) => {
        setLoading();
        insertTable(result);
        focusInValue = result;
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

const onSubmit = async (e) => {
  e.preventDefault();
  try {
    const submitInput = document.querySelector("input");
    const tableForm = document.querySelector("form");

    const formData = new FormData(tableForm);

    const formDataAll = Array.from(formData.entries()).reduce(
      (prev, [name, value]) => ({
        ...prev,
        [name]: value,
      }),
      {}
    );
    const formDataJson = JSON.stringify(formDataAll);
    const response = await fetch(`https://httpbin.org/post`, {
      method: "POST",
      body: formDataJson,
    });

    const result = await response.json();
    console.log(result);
    submitInput.value = "Форма успешно отправлена";
    form.remove();
    button.removeAttribute("disabled");
    button.innerHTML = "Данные успешно отправлены";
  } catch {
    const submitInput = document.querySelector("input");
    submitInput.value = "Ошибка отправки!";
  }
};

button.addEventListener("click", () => {
  removeText();
  getTableData();
});

form.addEventListener("submit", onSubmit);

const onChange = (e) => {
  e.preventDefault();
  submit.removeAttribute("disabled", true);
};

// const onChange = (e) => {
//   e.preventDefault();
//   const tableForm = document.querySelector("form");
//   focusOutValue = new FormData(tableForm);
//   console.log(focusInValue, `focus IN`);
//   console.log(focusOutValue, `focus OUT`);
//   if (focusInValue != focusOutValue) {
//     submit.removeAttribute("disabled", true);
//   }
// };

form.addEventListener("change", onChange);
