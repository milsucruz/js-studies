let students = [
  {
    name: "Ana",
    fisrtTest: 10,
    secondTest: 7,
  },
  {
    name: "Pedro",
    fisrtTest: 9,
    secondTest: 3,
  },
  {
    name: "Beatriz",
    fisrtTest: 8,
    secondTest: 5,
  },
  {
    name: "João",
    fisrtTest: 8,
    secondTest: 9,
  },
]

function average (fisrtTest, secondTest) {
  let result = ((fisrtTest + secondTest) /2).toFixed(2)
  return (result)
}


for (let student of students) {
let result = average (student.fisrtTest, student.secondTest)
let aproved;

if (result > 7) {
 aproved = alert (`O resultado do(a) aluno(a) foi: ${result} \nParabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
}

else {
  aproved = alert (`O resultado do(a) aluno(a) foi: ${result} \nNão foi dessa vez, ${student.name}! Você foi reprovado(a) no concurso!`)
}
}