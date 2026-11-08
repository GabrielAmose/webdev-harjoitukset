"use strict";
let lista = [];
let text = "";

for (let x = 0; x < 6; x++){
    let nimet = prompt(`Anna ${x + 1} koiran nimi: `);
    lista.push(nimet);
}

lista = lista.sort();
lista = lista.reverse();

for (let y = 0; y < 6; y++){
    text += "<li>" + lista[y] + "</li>";
}

document.getElementById("nimet").innerHTML = text;