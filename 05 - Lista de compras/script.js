let items = []

for (item = 0; item < 5; item ++) {
  itemName = prompt ("Digite o item " + (item + 1))
  items[item] = itemName 
}

alert (items)