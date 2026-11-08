"use strict";
const yeno = confirm("Pitäisikö minun laskea neliöjuuri?")

if (yeno == true){
    const luku = parseFloat(prompt("Anna luku: "));

    if (luku < 0){
        document.querySelector("#juuri").innerHTML = "Negatiivisen luvun neliöjuuri ei ole määritelty";
    }

    else {
        document.querySelector("#juuri").innerHTML = "Neljöjuuri " + luku + " on " + Math.sqrt(luku);
    }
}

else if (yeno == false){
    document.querySelector("#juuri").innerHTML = "Neliöjuurta ei lasketa.";
}