"use strict";
let noppa = parseInt(prompt("Montako noppaa haluatko heittää?: "));
let sum = 0;
let sum2 = 0;
let prob = 0;
let lista = [];

for (let x = 0; x <= noppa - 1; x++){
    sum += Math.floor(Math.random() * 6) + 1;
    lista.push(1);
}

while (true){
    sum2 = 0;
    for (let y = 0; y < noppa; y++){ sum2 += lista[y]; }
    if (sum2 == sum){ prob++; }
    lista[0]++;

    for (let z = 0; z < noppa - 1; z++){
        /* esim. [1, 6, 1] -> [1, 1, 1]*/
        //there is a problem here
        if (lista[z] == 7){
            lista[z] = 1;
            lista[z + 1]++;
        }
    }

    if (lista[noppa - 1] == 7){ break; }

}

let pros = prob * 100 / Math.pow(6, noppa);
pros = pros.toFixed(2);

document.querySelector("#nop").innerHTML = noppa + " nopalla, summa " + sum + ": todennäköisyys on " + pros + "%";