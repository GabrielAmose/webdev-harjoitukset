"use strict";
let lista = [];
let text = "";
for (let x = 0; x < 5; x++){
    let num = prompt(`Anna ${x + 1}. numero: `);
    lista.push(num);
}
for (let y = lista.length - 1; y >= 0; y--){
    text += "<p>" + lista[y] + "</p>";
}

document.getElementById("numerot").innerHTML = text;