//1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: 'joao',
  person2: 'maria',
  person3: 'jorge'
}

for (let index in names) {
  console.log('ola ' + names[index])
}

//2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: 'A3 Sedan',
  manuFacturer: 'Audi',
  year: 2020
}
for (let carros in car) {
  console.log(carros +": "+ car[carros])
}