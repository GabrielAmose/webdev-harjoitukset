"use strict";
const lista = ["First item", "Second item", "Third item"];

for ( let i = 0; i < lista.length; i++){
    const node = document.createElement("li");

    const textnode = document.createTextNode(lista[i]);

    node.appendChild(textnode);

    document.getElementById("target").appendChild(node);
}

