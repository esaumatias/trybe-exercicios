const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const newArray = arrays.reduce((acumulador, currentValue) => {
    return acumulador.concat(currentValue);
  });
  
  return newArray
}
console.log(flatten())