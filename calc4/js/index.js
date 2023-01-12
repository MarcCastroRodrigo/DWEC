'use strict'
window.alert('Bienvenido a la calculadora')
let operacion
let operador1
let operador2
class Calculadora {
  lastResult = 0
  sumar () {
    this.lastResult = operador1 + operador2
    return this.lastResult
  }

  restar () {
    this.lastResult = operador1 - operador2
    return this.lastResult
  }

  multiplicar () {
    this.lastResult = operador1 * operador2
    return this.lastResult
  }

  dividir () {
    this.lastResult = operador1 / operador2
    return this.lastResult
  }
}
class Error {
  constructor (message) {
    this.message = message
    this.name = 'Error'
  }
}
const calc = new Calculadora()
function obtenerOperacion () {
  operacion = window.prompt('Introduce la operacion que quieres realizar (+,-,*,/)')
  if (operacion === null) {
    throw new Error('Cancelar')
  }
  operacion = operacion.trim()
  switch (operacion) {
    case '+':
    case '-':
    case '*':
    case '/':
      break
    default: throw new Error('Operación incorrecta')
  }
}
let operadores
const obtenerOperandos = function () {
  operadores = window.prompt('Introduce los dos operadores separados por un espacio')
  if (operadores === null) {
    throw new Error('Cancelar')
  }
  operadores = operadores.trim()
  operador1 = Number(operadores.substring(0, operadores.indexOf(' ')))
  operador2 = Number(operadores.substring(operadores.indexOf(' '), operadores.length))
  if (operadores.substring(0, operadores.indexOf(' ')) === 'R') {
    operador1 = calc.lastResult
    console.log(operador1)
  }
  if (operadores.substring(operadores.indexOf(' '), operadores.length).trim() === 'R') {
    operador2 = calc.lastResult
    console.log(operador2)
  }
  if (!operador1 || !operador2) {
    throw new Error('Introduce correctamente los 2 números separados por un espacio')
  }
}
let opCorrect
do {
  do {
    try {
      opCorrect = true
      obtenerOperacion()
    } catch (err) {
      if (err.message === 'Cancelar') {
        break
      }
      window.alert(err.message)
      opCorrect = false
    }
  } while (!opCorrect)
  if (operacion === null) {
    break
  }
  do {
    try {
      opCorrect = true
      obtenerOperandos()
    } catch (err) {
      if (err.message === 'Cancelar') {
        break
      }
      window.alert(err.message)
      opCorrect = false
    }
  } while (!opCorrect)
  if (operadores === null) {
    break
  }
  switch (operacion) {
    case '+': window.alert(calc.sumar())
      break
    case '-': window.alert(calc.restar())
      break
    case '*': window.alert(calc.multiplicar())
      break
    case '/': window.alert(calc.dividir())
      break
  }
} while (window.confirm('¿Quieres seguir operando?'))
