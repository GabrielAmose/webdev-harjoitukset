function nopanHeitto(sivut){
    noppa = Math.floor(Math.random() * sivut) + 1;
    return noppa;
}

const sivuja = parseInt(prompt("Montako sivuja haluat nopassa on?"))
let num = 0;
let text = "";


while (true){
    
    text += "<li>" + nopanHeitto(sivuja) + "</li>"
    if (noppa == sivuja){
        break;
    }
}

document.getElementById("numerot").innerHTML = text;