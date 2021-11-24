"use strict";

function Auto(model) {
  this.model = model;
  this.klakson = function () {
    console.log("Bip " + this.model);
  };
}

const autoOne = new Auto("Maserati");
const autoTwo = new Auto("ZaZ");
autoOne.klakson();
autoTwo.klakson();
