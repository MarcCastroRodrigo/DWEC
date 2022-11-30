"use strict"
alert ("Bienvenido a la calculadora");
let opCorrecta= true;
let operacion;
let calculadora = {
    lastResult : 0
};
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
            if (operadores.substring(0,operadores.indexOf(' ')) == "R"){
                operador1 = calculadora.lastResult;
               console.log(operador1);
            }
            if (operadores.substring(operadores.indexOf(' '),operadores.length).trim() == "R"){
                operador2 = calculadora.lastResult;
                console.log(operador2);
            }
        }while(!operador1 || !operador2);
    }
    obtenerOperandos();
    calculadora.sumar = function() {
        this.lastResult = operador1 + operador2;
        return this.lastResult;
            
    }
    calculadora.restar = function() {
        this.lastResult = operador1 - operador2;
        return this.lastResult;
    }
    calculadora.multiplicar = function() {
        this.lastResult = operador1 * operador2;
        return this.lastResult;
    }
    calculadora.dividir = function() {
        this.lastResult = operador1 / operador2;
        return this.lastResult;
    }
    switch(operacion){
        case '+': alert(calculadora.sumar());
                console.log(calculadora.lastResult);
            break;
        case '-': alert(calculadora.restar());
            break;
        case '*': alert(calculadora.multiplicar());
            break;
        case '/': alert(calculadora.dividir());
            break; 
    }
}while(confirm("¿Quieres seguir operando?"));






