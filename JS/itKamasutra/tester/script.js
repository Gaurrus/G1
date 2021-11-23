"use strict";

function Auto(model) {
  this.model = model;
  this.klakson = function () {
    console.log("Bip");
  };
}

const autoOne = new Auto("Maserati");
autoOne.klakson();
