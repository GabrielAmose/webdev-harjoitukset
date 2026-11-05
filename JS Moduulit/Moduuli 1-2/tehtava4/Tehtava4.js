"use strict";
const nimi = prompt("Mikä on sinun nimi: ");
const classes = Math.floor(Math.random() * 3) + 1;

if (classes == 1){
    document.querySelector("#harry").innerHTML = nimi + ", sinä olet Gryffindor";
}
else if (classes == 2){
    document.querySelector("#harry").innerHTML = nimi + ", sinä olet Slytherin";
}
else if (classes == 3){
    document.querySelector("#harry").innerHTML = nimi + ", sinä olet Hufflepuff";
}
else if (classes == 4){
    document.querySelector("#harry").innerHTML = nimi + ", sinä olet Ravenclaw";
}