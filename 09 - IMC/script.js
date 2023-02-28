const patients = [
  {
    name: "João",
    age: 20,
    height: 180,
    weight: 75,
  },
  {
    name: "Pedro",
    age: 35,
    height: 190,
    weight: 85,
  },
    {
    name: "Ana",
    age: 24,
    height: 160,
    weight: 50,
  }
]

function IMC (weight, height) {
  return (weight / ((height/100)**2)).toFixed(2)
}

function printIMC (patient) {
  return `O paciente ${patient.name} possui um IMC de ${IMC(patient.weight, patient.height)}`
}

for (patient of patients) {
  let IMCmessage = printIMC(patient)
  alert (IMCmessage)
}