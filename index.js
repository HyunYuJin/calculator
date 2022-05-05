"use strict"

const nodes = {
  formula: document.getElementById('formula'),
  operators: document.querySelectorAll('.operators button'),
  numbers: document.querySelectorAll('.numbers button'),
  equals: document.querySelector('.equals')
}

let arithmetic = {
  first: '',
  last: '',
  operator: ''
}

const operation = {
  addition: (a, b) => a + b,
  subtraction: (a, b) => a - b,
  multiplication: (a, b) => a * b,
  division: (a, b) => a / b
}

function init () {
  initEvents()
}

function initEvents () {
  nodes.operators.forEach(operator => operator.addEventListener('click', inputOperators))
  nodes.numbers.forEach(number => number.addEventListener('click', inputNumbers))
  nodes.equals.addEventListener('click', updateResult)
}

function updateResult () {
  if (arithmetic.last) {
    const result = operation[arithmetic.operator](Number(arithmetic.first), Number(arithmetic.last))
    displayFormula(result)
    arithmetic.first = result
    arithmetic.last = ''
  }
}

function inputOperators (event) {
  updateResult()
  const operator = event.target.dataset.operator
  arithmetic.operator = operator
}

function inputNumbers (event) {
  const number = event.target.dataset.number
  
  if (!arithmetic.operator) {
    arithmetic.first += number
    displayFormula(arithmetic.first)
  } else {
    arithmetic.last += number
    displayFormula(arithmetic.last)
  }
}

function displayFormula (value) {
  nodes.formula.innerHTML = value
}

function clearFormula () {
  nodes.formula.innerHTML = ''
}

init()