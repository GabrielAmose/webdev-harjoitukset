"use strict";
const num1 = parseInt(prompt("Anna numero: "));
const num2 = parseInt(prompt("Anna toinen numero: "));
const num3 = parseInt(prompt("Anna kolmas numero: "));

const sum = num1 + num2 + num3;
const tulo = num1 * num2 * num3;
const aver = sum / 3;

document.querySelector("#numero1").innerHTML = "summa: " + sum;
document.querySelector("#numero2").innerHTML = "Tulo: " + tulo;
document.querySelector("#numero3").innerHTML = "Keskiarvi: " + aver;