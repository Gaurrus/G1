"use strict";
const formElem = document.querySelector(`.form`);
const inputs = document.querySelectorAll(`.input`);
const button = document.querySelector(`.button`);
button.setAttribute("disabled", true);
const onSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(formElem);

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

  if (response.ok) {
    const result = await response.json();
    removeText();
    console.log(result);
    document.body.insertAdjacentHTML(
      "beforeend",
      `<h3>Форма успешно отправлена!</h3>`
    );
  } else
    document.body.insertAdjacentHTML("beforeend", `<h3>Ошибка отправки!</h3>`);
};

formElem.addEventListener("submit", onSubmit);

const removeText = () => {
  const message = document.querySelector("h3");
  if (message) message.remove();
};

for (let i = 0; i <= inputs.length - 1; i++) {
  inputs[i].addEventListener("blur", () => {
    if (!inputs[i].value) {
      button.setAttribute("disabled", true);
    } else {
      if (
        button.hasAttribute("disabled") &&
        i == inputs.length - 1 &&
        inputs[i - 1].value
      ) {
        button.removeAttribute("disabled", true);
      }
    }
  });
}
