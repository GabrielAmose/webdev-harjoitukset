function compareNumbers(a, b) {
  return b - a;
}

let ehdolista = [];
let text = "";

const monta = parseInt(prompt("Montako ehdokkaita on?"))

for (let x = 0; x < monta; x++){
    let ehdokas = prompt(`mikä on ehdokas ${x + 1} nimi?`);
    ehdolista.push({nimi: ehdokas, aanestykset: 0})
}

const aanestajat = parseInt(prompt("Montako äänestyksiä"));

for (let y = 1; y <= aanestajat; y++){
    let aanestus = prompt("äänestä joku ehdokas. (nimellä)");
    for (let z = 0; z < monta; z++){
        if (ehdolista[z].nimi == aanestus){
            ehdolista[z].aanestykset++
            break;
            
        }
    }
}

ehdolista.sort((a, b) => b.aanestykset - a.aanestykset);
text += "<p>" + "Voittaja on " + ehdolista[0].nimi + " " + ehdolista[0].aanestykset + " pisteellä" + "</p>";
text += "<p>" + "Tulokset:" + "</p>";
for (let a = 0; a < monta; a++){
    text += "<p>" + ehdolista[a].nimi + ": " + ehdolista[a].aanestykset + " äänestyksiä" + "</p>";
}

document.getElementById("aanestus").innerHTML = text;