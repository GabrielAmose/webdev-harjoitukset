"use strict";

function fatu (num){
    if (num <= 1){
    return false;
    }

    else if (num > 1){
        let x = 2;
        while (x * x <= num){
            if (num % x == 0){
                return false;
            }
            x++;
        }
        return true;
    }
}

const num = parseInt(prompt("Anna numero ja kerron sinulle jos luku on alkuluku:"));

const vast = fatu(num);

if (vast == true){
    document.querySelector("#vastaus").innerHTML = "Numero " + num + " on alkuluku";
}

else if (vast == false){
    document.querySelector("#vastaus").innerHTML = "Numero " + num + " ei ole alkuluku";
}