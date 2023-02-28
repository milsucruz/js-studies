let numberOne = prompt ("Digite o primeiro número: ")
let numberTwo = prompt ("Digite o segundo número: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let multi = numberOne * numberTwo
let div = numberOne / numberTwo
let restDiv = numberOne % numberTwo

let parImpar = (Number(sum) % 2)

alert ("O resultado da soma é: " + sum)
alert ("O resultado da subtração é: " + sub)
alert ("O resultado da multipliação é: " + multi)
alert ("O resultado da divisão é: " + div)
alert ("O resto da divisão é: " + restDiv)

if (parImpar == 0) {
  alert ("A soma dos dois números é par: " + sum)
}

else {
  alert ("A soma dos dois números é ímpar: " + sum)
}

if (numberOne == numberTwo) {
  alert ("O número um e o número dois são iguais!")
}