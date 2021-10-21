"use strict";

const user = {
  display: "440×900",
  JavaScript: "Да",
  Flash: "32.0",
  OS: "Windows8",
};

const {
  display: myDisplay,
  OS: myOs,
  browser: myBrowser = "GoogleChrome",
} = user;

console.log(myDisplay, myOs, myBrowser);
