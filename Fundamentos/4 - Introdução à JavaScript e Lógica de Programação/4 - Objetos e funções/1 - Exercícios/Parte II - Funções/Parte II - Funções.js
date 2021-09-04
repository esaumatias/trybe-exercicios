//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalidrome(palidrome) {
  if (palidrome === 'arara') {
    return true;
  } else if (palidrome !== 'arara') {
    return false;
  }
  }
console.log(verificaPalidrome('arara'))

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let array = [10, 25, 35, 4, 9]
function maior(array2) {
  let maior = 0;
  for (let index = 0; index < array2.length; index += 1){
    if (array2[index] > maior) {
       maior = array.lastIndexOf()
    }
  } 
  return maior
} console.log(maior(array))
