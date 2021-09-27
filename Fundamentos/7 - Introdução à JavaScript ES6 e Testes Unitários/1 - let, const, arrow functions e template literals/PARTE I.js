      function testingScope(escopo) {
        if (escopo === true) {
          var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
          console.log(ifScope);
        } else {
          var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
          console.log(elseScope);
        }
        console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
      }

      testingScope(true);

      // 1 - Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
      //   *Modifique a estrutura da função para que ela seja uma arrow function .
      //   *Modifique as concatenações para template literals .

      const testingScope2 = (escopo) => (
        escopo === true ? 'Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !' : 'Não devo ser utilizada fora meu escopo (else)'
      );

      console.log(testingScope2(true));

      // 1 - Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
      // Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
      // Copie o código abaixo.
      
      const oddsAndEvens = [13, 3, 4, 10, 7, 2];

      // Seu código aqui.

      const comparaNumeros = (a,b) => a - b;

      console.log(oddsAndEvens.sort(comparaNumeros));

      // Crie uma página que contenha:
      // Um botão ao qual será associado um event listener ;
      // Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
      // Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

      let buttonInput = document.querySelector('#button')
      let textH1 = document.querySelector('#h1')

      let soma4 = 0;

      function contador() {
        soma4 += 1;
        textH1.innerHTML = soma4;
      }

      buttonInput.addEventListener('click', contador);
     
     