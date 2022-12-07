"use strict"
alert ("Bienvenido a la calculadora");

let opCorrecta;
let operacion;

do {
    function obtenerOperacion() {
        do {
            opCorrecta = true;
            operacion = prompt ("Introduce la operacion que quieres realizar (+,-,*,/)");
            if (operacion === null) {
                break;
            }
            operacion = operacion.trim(); 
            switch(operacion) {
                case '+':
                case '-':
                case '*':
                case '/':
                    break;   
                default: opCorrecta = false; 
                         alert("Operación incorrecta");                      
            }
        }while (!opCorrecta);
    }
    obtenerOperacion();
    if (operacion === null) {
        break;
    }
    let operadores;
    let operador1;
    let operador2;
    let obtenerOperandos = function() {
        do {
            operadores = prompt ("Introduce los dos operadores separados por un espacio");
            if (operadores === null) {
                break;
            }
            operadores = operadores.trim();
            operador1 = Number(operadores.substring(0,operadores.indexOf(' ')));
            operador2 = Number(operadores.substring(operadores.indexOf(' '),operadores.length));
            if (!operador1 || !operador2) {
                alert("Introduce correctamente los 2 números separados por un espacio")
            }
        }while(!operador1 || !operador2);
    }
    obtenerOperandos();
    if (operadores === null) {
        break;
    }   
    let obtenerSuma = (operador1, operador2) => operador1 + operador2;
    let obtenerResta = (operador1, operador2) => operador1 - operador2;
    let obtenerProducto = (operador1, operador2) => operador1 * operador2;
    let obtenerDivision = (operador1, operador2) => operador1 / operador2;
    switch (operacion) {
        case '+': 
            alert(obtenerSuma(operador1, operador2));
            break;
        case '-': 
            alert(obtenerResta(operador1, operador2));
            break;
        case '*': 
            alert(obtenerProducto(operador1, operador2));
            break;
        case '/': 
            alert(obtenerDivision(operador1, operador2));
            break; 
    }
}while (confirm("¿Quieres seguir operando?"));


