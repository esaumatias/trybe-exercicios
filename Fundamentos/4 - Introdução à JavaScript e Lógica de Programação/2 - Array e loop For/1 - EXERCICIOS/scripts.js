let numbers = [3, 9, 6, 21, 70, 8, 100, 5, 33, 26];

//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (let numeros of numbers) {
    console.log(numeros)
}

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let soma = 0;

for (let index = 0; index < numbers.length; index = index + 1) {
    soma = soma + numbers[index];
}
console.log(soma);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let total = numbers.length
console.log (soma / total)

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (soma > 20) {
    console.log("valor maior que 20")
} else  {
    console.log("valor menor ou igual a 20")
}

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maior = 0
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maior) {
        maior = numbers[i]
    }
} console.log(maior)

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let impar = 0; 
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0 ) {
        impar = impar + 1
        
    } else if ( impar === 0){
        console.log("nenhum valor ímpar encontrado")
        break
    }
} if (impar > 0) {
    console.log(impar)
}

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menor = numbers[0]
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < menor) {
        menor = numbers[i]
    }
} console.log(menor)

//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let array = [];
for (let index = 1; index <= 25; index += 1) {
    array.push(index)
    
}console.log(array)

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 . 

for (let ara of array) {
    console.log(ara / 2)
}