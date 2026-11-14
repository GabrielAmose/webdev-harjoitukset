function evnt () {
    let number1 = parseInt(document.getElementById("num1").value);
    let number2 = parseInt(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    let result = 0;
    if ( operation == "add" ) {
        result = number1 + number2;
    }
    else if ( operation == "sub" ) {
        result = number1 - number2;
    }
    else if ( operation == "multi" ) {
        result = number1 * number2;
    }
    else if ( operation == "div" ) {
        result = number1 / number2;
    }
    document.getElementById("result").innerHTML = result;
}

document.getElementById("start").addEventListener("click", evnt); 