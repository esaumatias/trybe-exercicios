
//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let number = 25; 

let aste = ""
for (let index = 1; index <= number; index += 1) {
    aste = "*".repeat(number)
    console.log(aste)
}

//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
let asteriscos = ""
for (let index2 = 1; index2 <= number; index2 += 1) {
    asteriscos += "*"
    console.log(asteriscos)
}

// Agora inverta o lado do triângulo. Por exemplo:

let asteca = "" 
let soma = 0;
for (let index3 = 1; index3 <= number; index3 += 1) {
    asteca += "*";
    soma = number - index3;
    console.log(" ".repeat(soma) + asteca)
}

//Depois, faça uma pirâmide com n asteriscos de base:

let astecass = "" 
let soma2 = 0;
for (let index4 = 1; index4 <= number; index4 += 1) {
    if (index4 % 2 > 0) {
        if (index4 === 1) {
        astecass += "*";
        soma2 = number - index4;
        soma3 = soma2 / 2
        console.log(" ".repeat(soma3) + astecass + " ".repeat(soma3));
        
        } 
    } else if (index4 > 1 ) {
        let astecas2 = "*";
        for (let index4 = 1; index4 <= number; index4 += 1) {
            if (index4 % 2 > 0) {
                if (index4 > 1) {
                astecas2 += "**";
                soma2 = number - index4;
                soma3 = soma2 / 2
                console.log(" ".repeat(soma3) + astecas2 + " ".repeat(soma3));
                } 
            }    
    }break
    }
}