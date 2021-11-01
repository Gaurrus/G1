"use strict";

const input = document.querySelector(`input`);
input.setAttribute(`id`, `button`);
console.log(input.hasAttribute(`id`));
input.setAttribute(`value`, `Push`);
console.log(input.getAttribute(`value`));
console.log(input.getAttribute(`maxlength`));
console.log(input.hasAttribute(`value`));
input.setAttribute(`type`, `button`);
input.setAttribute("onclick", `alert('Hallo!')`);
input.removeAttribute(`maxlength`);
console.log(input.hasAttribute(`maxlength`));
