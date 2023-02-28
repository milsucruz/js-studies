let option 

let items = []

while (option != 3) {

  option = Number(prompt (`Digite a opção desejada:
  1. Cadastrar um item na lista
  2. Mostrar itens da lista
  3. Fechar o aplicativo`))

  switch (option) {
    case 1:
      let item = prompt ("Digite um item para cadastra-lo")
  
      items.push(item)
  
      break
  
      case 2: 
      if (items.length == 0) {
        alert ("Não há itens cadastrados!")
      }
  
      else {
        alert (items)
      }
  
      break 
  
      case 3:
  
        alert ("Tchau!")
  
        break
  
      default:
        alert ("Opção inválida. Tente novamente!")
  }

}