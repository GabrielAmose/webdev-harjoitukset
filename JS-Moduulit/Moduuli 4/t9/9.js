function calculator(symbol, num1, num2){
    if (symbol == "+"){
        return num1 + num2;
    }
    else if (symbol == "-"){
        return num1 - num2;
    }
    else if (symbol == "*"){
        return num1 * num2;
    }
    else if (symbol == "/"){
        return num1 / num2;
    }
}

function evnt(){
    let text = document.getElementById("calculation").value;
    let num1 = "";
    let num2 = "";
    let sym = "";
    let conti = "";
    const lista = text.split("");

    
    for (let x = 0; x < lista.length; x++){
        if (/\D/.test(lista[x]) == false){
            num1 += lista[x];
        }
        else if (/\D/.test(lista[x]) == true){
            sym += lista[x];
            conti = x++;
            break;
        }
    }
    for ( let y = conti; y < lista.length; y++){
        if (/\D/.test(lista[y]) == false){
        num2 += lista[y];
        }
    }

    const result = calculator(sym, parseInt(num1), parseInt(num2));

    document.getElementById("result").innerHTML = result;
}

document.getElementById("start").addEventListener("click", evnt); 