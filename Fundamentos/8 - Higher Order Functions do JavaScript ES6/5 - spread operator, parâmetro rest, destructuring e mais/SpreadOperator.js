// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maça', 'Laranja', 'Goiaba'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Mangaba', 'Uva', 'Abacate'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));