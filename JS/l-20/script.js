"use strict";

const formElem = document.querySelector(`.form`);

const onSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(formElem);
  const data = Array.from(
    formData.entries().reduce((prev, [name, value]) => ({
      ...prev,
      [name]: value,
    }))
  );

  const formDataJson = JSON.stringify(formData);
  const response = await fetch(`https://httpbin.org/post`, {
    method: "POST",
    body: formDataJson,
  });

  if (response.status === 200) {
    const result = await response.json();
    console.log(response);
  } else console.log(`error`);
};

formElem.addEventListener("submit", onSubmit);
