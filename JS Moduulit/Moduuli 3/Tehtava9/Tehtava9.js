function even(numerot){
    const lista = [];
    for (let x = 0; x < numerot.length; x++){
        if (numerot[x] % 2 == 0){
            lista.push(numerot[x]);
        }
    }
    return lista;
}

let text = ""

let lista1 = [2, 7, 3, 8];

text += "<p>" + lista1 + "</p>";
text += "<p>" + even(lista1) + "</p>";

document.getElementById("numerot").innerHTML = text;