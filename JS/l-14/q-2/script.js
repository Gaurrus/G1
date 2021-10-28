"use strict";

const red = document.querySelector("#first");
red.style.backgroundColor = "red";

const second = document.querySelector("#second");
second.style.backgroundColor = "blue";

const yellows = document.querySelectorAll(".yellow");

yellows.forEach((element, index) => {
  if (index != 1) element.style.backgroundColor = "yellow";
  else element.style.backgroundColor = "pink";
});

const allDives = document.querySelectorAll("div");
allDives[3].style.backgroundColor = "green";
