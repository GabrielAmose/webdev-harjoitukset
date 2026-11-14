'use strict';
const names = ['John', 'Paul', 'Jones'];
let text = ""

for ( let x = 0; x < names.length; x++){

    text += "<li>" + names[x] + "</li>";
}

document.getElementById("target").innerHTML = text;
