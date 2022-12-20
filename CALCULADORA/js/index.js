'use strict'
window.alert('Bienvenido a la calculadora')
let opCorrecta
let operacion
const calculadora = {
  lastResult: 0
}
do {
  function obtenerOperacion () {
    do {
      opCorrecta = true
      operacion = window.prompt('Introduce la operacion que quieres realizar (+,-,*,/)')
      if (operacion === null) {
        break
      }
      operacion = operacion.trim()
      switch (operacion) {
        case '+':
        case '-':
        case '*':
        case '/':
          break
        default: opCorrecta = false
          window.alert('Operación incorrecta')
      }
    } while (!opCorrecta)
  }
  obtenerOperacion()
  if (operacion === null) {
    break
  }
  let operadores
  let operador1
  let operador2
  const obtenerOperandos = function () {
    do {
      operadores = window.prompt('Introduce los dos operadores separados por un espacio')
      if (operadores === null) {
        break
      }
      operadores = operadores.trim()
      operador1 = Number(operadores.substring(0, operadores.indexOf(' ')))
      operador2 = Number(operadores.substring(operadores.indexOf(' '), operadores.length))
      if (operadores.substring(0, operadores.indexOf(' ')) === 'R') {
        operador1 = calculadora.lastResult
        console.log(operador1)
      }
      if (operadores.substring(operadores.indexOf(' '), operadores.length).trim() === 'R') {
        operador2 = calculadora.lastResult
        console.log(operador2)
      }
      if (!operador1 || !operador2) {
        window.alert('Introduce correctamente los 2 números separados por un espacio')
      }
    } while (!operador1 || !operador2)
  }
  obtenerOperandos()
  if (operadores === null) {
    break
  }
  calculadora.sumar = function () {
    this.lastResult = operador1 + operador2
    return this.lastResult
  }
  calculadora.restar = function () {
    this.lastResult = operador1 - operador2
    return this.lastResult
  }
  calculadora.multiplicar = function () {
    this.lastResult = operador1 * operador2
    return this.lastResult
  }
  calculadora.dividir = function () {
    this.lastResult = operador1 / operador2
    return this.lastResult
  }
  switch (operacion) {
    case '+': window.alert(calculadora.sumar())
      console.log(calculadora.lastResult)
      break
    case '-': window.alert(calculadora.restar())
      break
    case '*': window.alert(calculadora.multiplicar())
      break
    case '/': window.alert(calculadora.dividir())
      break
  }
} while (window.confirm('¿Quieres seguir operando?'))
