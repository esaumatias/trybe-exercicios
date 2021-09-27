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

// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:

let string = "Tryber x aqui!";
let parametro = 'esau';
let parametroNovo = string.split(' ');
for (let index = 0; index < parametroNovo.length; index += 1) {
  if (parametroNovo[index] === 'x') {
    parametroNovo[index] = parametro;
  }
}

console.log(parametroNovo.toString());