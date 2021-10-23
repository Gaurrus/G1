"use strict";

const button = document.getElementById("button");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  const heading = document.querySelector("h2");
  if (heading) heading.remove();
  body.insertAdjacentHTML(
    "beforeend",
    `<h2>${max1} - max1,
    ${max2} - max2,
    ${max3} - max3, ${rest} </h2>`
  );
});

let speed = [9.73, 9.68, 9.71, 9.74, 9.72, 9.75];
console.log(speed);

const sortSpeed = speed.sort((a, b) => b - a);
console.log(sortSpeed);

const [max1, max2, max3, ...rest] = sortSpeed;
console.log(`${max1} - max1`, `${max2} - max2`, `${max3} - max3`, rest);
