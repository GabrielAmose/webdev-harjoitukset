function nopanHeitto(){
    noppa = Math.floor(Math.random() * 6) + 1;
    return noppa;
}

let num = 0;
let text = "";

while (true){
    
    text += "<li>" + nopanHeitto() + "</li>"
    if (noppa == 6){
        break;
    }
}

document.getElementById("numerot").innerHTML = text;