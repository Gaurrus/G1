"use strict";
const table = document.querySelector(`table`);
const removable = document.querySelector(`.skyblue`);
removable.remove();

const tbody = document.querySelector(`tbody`);
tbody.insertAdjacentHTML(
  "afterbegin",
  `<tr class = 'added-row'>
  <td></td>
  <td colspan="31" align = "center">График дежурст сотрудников на август 2020</td>
  </tr>`
);

const beforeend = document.querySelector(`#violet`);
tbody.insertAdjacentHTML("beforeend", beforeend.outerHTML);

table.setAttribute(`border`, `1`);
table.setAttribute(`cellspacing`, `0`);

tbody.querySelector(`tr:first-of-type`).setAttribute(`bgcolor`, `yellow`);
tbody.querySelector(`tr:last-of-type`).setAttribute(`bgcolor`, `yellow`);
