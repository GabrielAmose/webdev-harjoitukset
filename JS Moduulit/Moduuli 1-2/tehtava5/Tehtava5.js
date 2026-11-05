"use strict";
const vuosi = parseInt(prompt("Laita joku vuosi: "));

if (vuosi % 4 == 0 && vuosi % 400 == 0){
    document.querySelector("#leap").innerHTML = "Vuosi " + vuosi + " on karkausvuosi";
}
else if (vuosi % 4 == 0){
    document.querySelector("#leap").innerHTML = "Vuosi " + vuosi + " on karkausvuosi";
}

else {
    document.querySelector("#leap").innerHTML = "Vuosi " + vuosi + " ei ole karkausvuosi";
}
