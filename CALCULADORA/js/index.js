"use strict"
alert ("Bienvenido a la calculadora");
let opCorrecta= true;

let operacion;
do{
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
    let operadores;
    let operador1;
    let operador2;
    do{
        operadores = prompt ("Introduce los dos operadores separados por un espacio");
        operadores = operadores.trim();
        operador1 = Number(operadores.substring(0,operadores.indexOf(' ')));
        operador2 = Number(operadores.substring(operadores.indexOf(' '),operadores.length));
    }while(!operador1 || !operador2);
    
    let resultado;
    
    switch(operacion){
        case '+': resultado=operador1 + operador2;
            break;
        case '-': resultado=operador1 - operador2;
            break;
        case '*': resultado=operador1 * operador2;
            break;
        case '/': resultado=operador1 / operador2;
            break; 
    }
    alert(resultado);
}while(confirm("¿Quieres seguir operando?"));


