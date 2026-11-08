function concat(list, teksti) {
    for (let x = 0; x < list.length; x++){
    teksti += list[x];
    }
    return teksti;
}
let text = ""
let lista = ["Villa", "Sukka", "Puikko"];

document.getElementById("cat").innerHTML = concat(lista, text);