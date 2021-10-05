const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  const verifica = numbers.find((numbers) => numbers % 3 === 0 || numbers % 5 === 0);
  return verifica;
}

console.log(findDivisibleBy3And5())

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  const verifica = names.find((names) => names.length === 5);
  return verifica;
}

console.log(findNameWithFiveLetters());

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
  const verifica = musicas.find((musicas) => musicas.id === id);
  return verifica.title;
}

console.log(findMusic('31031685'))