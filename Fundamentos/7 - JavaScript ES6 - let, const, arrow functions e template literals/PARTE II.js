// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.


let a = 4;
let receb = [a];
for (let index = 1; index <= a+1; index += 1) {
  if (a > index) {
    let diminui = a - index;
    receb.push(diminui)
  }
}

console.log(receb)

let soma = 1;
for (let index = 0; index < receb.length; index += 1) {
  soma = soma * receb[index];
}

let novaordem = [];
for (let i = 0; i < receb.length; i += 1) {
  novaordem.push(receb[i]+'*')
}

console.log(novaordem);

console.log(`${a}! = ${novaordem}! = ${soma}`);

// Crie uma função que receba uma frase e retorne qual a maior palavra.

let frase = "Antônio foi no banheasdasdiro e não sabemos o que aconteceu";
let soma2 = 0;
let novo = frase.split(' ');
let frasenova = '';

for (let index = 0; index < novo.length; index += 1) {
    if (soma2 < novo[index].length) {
      soma2 = novo[index].length;
      frasenova = novo[index];
    }
} 

console.log(frasenova);

Crie uma página que contenha:
Um botão ao qual será associado um event listener ;
Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const buttonInput = document.querySelector('button');
const textH1 = document.querySelector('h1');

let soma4 = 0;

function contador() {
  soma4 +=1
  textH1.innerHTML = soma4;
}

buttonInput.addEventListener('click', contador);