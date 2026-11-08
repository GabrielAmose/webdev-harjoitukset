"use strict";
let noppa = parseInt(prompt("Montako noppaa haluatko heittää?: "));
let sum = 0;

for (let x = 0; x < noppa; x++){
    sum += Math.floor(Math.random() * 6) + 1;
}

document.querySelector("#nop").innerHTML = "noppasta sait " + sum ;
