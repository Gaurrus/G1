"use strict";

const monitors = {
  Philips: 21,
  Asus: 19,
  Samsung: 23.5,
  LG24MK: 23.6,
  LG27GL: 27,
};

console.log(monitors);

const sancMonitors = Object.fromEntries(
  Object.entries(monitors).map(([key, value]) => [
    key,
    +(value * 2.54).toFixed(1),
  ])
);

console.log(sancMonitors);
