"use strict"
alert ("Bienvenido a la calculadora");
let opCorrecta= true;

let operacion;
do{
    function obtenerOperacion(){
    do{
        operacion = prompt ("Introduce la operacion que quieres realizar (+,-,*,/)"); 
        switch(operacion){
            case '+':
            case '-':
            case '*':
            case '/':
                break;   
            default: alert("Operación incorrecta");
                     !opCorrecta;    
        }
    }while(!opCorrecta);
}
obtenerOperacion();
    let operadores;
    let operador1;
    let operador2;
    let obtenerOperandos = function(){
        do{
            operadores = prompt ("Introduce los dos operadores separados por un espacio");
            operadores = operadores.trim();
            operador1 = Number(operadores.substring(0,operadores.indexOf(' ')));
            operador2 = Number(operadores.substring(operadores.indexOf(' '),operadores.length));
        }while(!operador1 || !operador2);
    }
    obtenerOperandos();
    
    let obtenerSuma = (operador1,operador2) => operador1 + operador2;
    let obtenerResta = (operador1,operador2) => operador1 - operador2;
    let obtenerProducto = (operador1,operador2) => operador1 * operador2;
    let obtenerDivision = (operador1,operador2) => operador1 / operador2;
    switch(operacion){
        case '+': alert(obtenerSuma(operador1,operador2));
            break;
        case '-': alert(obtenerResta(operador1,operador2));
            break;
        case '*': alert(obtenerProducto(operador1,operador2));
            break;
        case '/': alert(obtenerDivision(operador1,operador2));
            break; 
    }
}while(confirm("¿Quieres seguir operando?"));


