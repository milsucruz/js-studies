let result = prompt ("Advinhe qual é o número que estou pensando, está entre 0 e 10!")

let randomNumber = Math.round(Math.random() *10)

let xAttempts = 1

while (Number(result) != randomNumber) {
  result = prompt ("Erro, tente novamente!")
  xAttempts++
}

alert (`Parabens! O número que eu pensei é ${randomNumber} e você acertou o número em ${xAttempts}! `)

