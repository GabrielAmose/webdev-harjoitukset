function compareNumbers(a, b) {
  return b - a;
}

let lista = [];
let text = "";

while (true){
    let num = parseInt(prompt("Anna numero. kun olet valmis, laita numero 0: "));
    if (num == 0){
        break;
    }
    lista.push(num);
}
lista = lista.sort(compareNumbers);

for (let y = 0; y < lista.length; y++){
    text += "<p>" + lista[y] + "</p>";
}

document.getElementById("numerot").innerHTML = text;