'use strict'
let a = 0;
let b = null;
let c = undefined;
let d = "Привет";
let hello = (a || b || c || d);
console.log(hello);
let hello1 = (a && b && c && d);
console.log(hello1);
let hello2 = (a != b || c < d);
console.log(hello2);
let hello3 = (a != b && c < d);
console.log(hello3);