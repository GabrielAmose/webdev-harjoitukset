"use strict";
const alkuvuosi = parseInt(prompt("Mistä vuodesta haluat aloittaa?: "));
const loppuvuosi = parseInt(prompt("Mistä vuodesta haluat loppuu?: "));
let text = "";

if (alkuvuosi < loppuvuosi){
    
    for (let x = alkuvuosi; x <= loppuvuosi; x++){
        if (x % 4 == 0 && x % 400 == 0){
            text += "<li>" + x + "</li>";
        }
        else if (x % 4 == 0){
            text += "<li>" + x + "</li>"
        }
    }
    document.getElementById("vuodet").innerHTML = text;
}

else {
    document.querySelector("#vuodet").innerHTML = "ERROR!!!";
}


