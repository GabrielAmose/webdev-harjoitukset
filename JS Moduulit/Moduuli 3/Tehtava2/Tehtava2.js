"use strict";
const num = parseInt(prompt("Montako osallistujat"));
let lista = [];
let text = "";

for (let x = 0; x <= num - 1; x++){
    let nimet = prompt(`Anna ${x + 1} osallistujan nimi: `);
    lista.push(nimet);
}
lista = lista.sort();

for (let y = 0; y <= num - 1; y++){
    text += "<li>" + lista[y] + "</li>";
}

document.getElementById("nimet").innerHTML = text;