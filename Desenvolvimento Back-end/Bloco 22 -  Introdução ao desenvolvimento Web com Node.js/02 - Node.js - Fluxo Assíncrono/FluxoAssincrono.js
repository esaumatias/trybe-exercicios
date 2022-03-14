
function equacao(a, b ,c ) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number'|| typeof b !== 'number' || typeof c !== 'number') {
      reject('informe apenas numero')
    }
    const result = (a + b) / c;

    if (result < 50) {
      return reject('valor muito baixo');
    }

    resolve(result);
  });
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

async function callDoMath() {
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
try {
      const result = await equacao(...randomNumbers);
      console.log(result);
       } catch (err) {
         console.error(err);
       }
  }

  callDoMath()

// equacao(1000, 10, 10)
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error))

// equacao(1, 1, 'a')
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error))

// equacao(1, 1, 1)
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error))