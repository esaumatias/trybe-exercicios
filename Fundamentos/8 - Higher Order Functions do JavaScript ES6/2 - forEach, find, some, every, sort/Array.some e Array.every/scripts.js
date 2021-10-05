const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  const verifica = arr.some((arr) => arr === name);
  return verifica;
}

console.log(hasName(names, 'José'));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
  const verifica = arr.every((arr) => arr.age >= minimumAge);
  return verifica;
}

console.log(verifyAges(people, 18));