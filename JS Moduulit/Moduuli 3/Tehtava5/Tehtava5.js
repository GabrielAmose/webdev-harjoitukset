function compareNumbers(a, b) {
  return a - b;
}

let lista = [];
let text = "";

while (true){
    let num = parseInt(prompt("Anna numero: "));
    if ( lista.includes(num) == true){
        alert("Numero " + num + " on jo laitettu listaan");
        break;
    }
    lista.push(num);
}
lista = lista.sort(compareNumbers);

for (let y = 0; y < lista.length; y++){
    text += "<p>" + lista[y] + "</p>";
}

document.getElementById("numerot").innerHTML = text;