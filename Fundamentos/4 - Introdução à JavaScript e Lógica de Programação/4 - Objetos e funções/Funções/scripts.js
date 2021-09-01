const a = 26;
const b = 22;
const c = 28;

//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados.
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
if (a > b) {
    console.log(a)
} else {
    console.log(b)
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
if (a > b && a >> c) {
    console.log(a)
} else if (b > a && b > c) {
    console.log(b)
} else {
    console.log(c)
}

//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

if (a >= 1) {
    console.log("possitive")
} else if (a < 0) {
    console.log("negative")
} else if (a === 0){
    console.log("zero")
}

//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
let resu = 0;
resu = a + b + c;
if (resu === 180) {
    console.log(true)
} else {
    console.log(false)
}

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

const peao = "anda"
const bispo = "diagonal"
const dama = "todos os lados"

switch (bispo) {
    case "anda":
        console.log("anda")
        break

    case "diagonal":
        console.log("diagonal");
        break;

    case "todos os lados":
        console.log("todos os lados");
        break;

        default:
            console.log("peça noa existe")
}

//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
const porcentagem = 50;

if (porcentagem >= 90 && porcentagem <= 100) {
    console.log("A")
} else if (porcentagem >=  80 && porcentagem <= 89) {
    console.log("B")
}else if (porcentagem >= 70 && porcentagem <= 79) {
    console.log("C")
}else if (porcentagem >= 60 && porcentagem <= 69) {
    console.log("D")
}else if (porcentagem >= 50 && porcentagem <= 59) {
    console.log("E")
}else if (porcentagem < 50 && porcentagem >= 0) {
    console.log("F")
} else if (porcentagem < 0 || porcentagem > 100 ) {
    console.log("erro")
}

//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

if (a % 2 === 0 ||b % 2 === 0 ||c % 2 === 0) {
    console.log(true)
} else {
    console.log(false)
}

//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
if (a % 2 !== 0 ||b % 2 !== 0 ||c % 2 !== 0) {
    console.log(true)
} else {
    console.log(false)
}

//Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

let valorCusto = 0;
let valorVenda = 0;
let valorCustoTotal = 0;
valorCusto = 500 * 1000
valorVenda = 1500 * 1000
let lucro = 0;
valorCustoTotal = valorCusto + (valorCusto / 5)
lucro = valorVenda - valorCustoTotal;

console.log(lucro)