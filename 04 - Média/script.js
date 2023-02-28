let student = prompt('Qual é o seu nome?')

let n1 = prompt('Nota da primeira prova: ')
let n2 = prompt('Nota da segunda prova: ')
let n3 = prompt('Nota da terceira prova: ')

let average = (Number(n1) + Number(n2) + Number(n3)) / 3
average = average.toFixed(2)

let result = average > 6

if (result) {
  alert('Parabéns, ' + student + '! Sua média foi de: ' + average)
} else {
  alert(
    student +
      ' estude mais para sua prova de recuperação! Sua média foi de: ' +
      average
  )
}
