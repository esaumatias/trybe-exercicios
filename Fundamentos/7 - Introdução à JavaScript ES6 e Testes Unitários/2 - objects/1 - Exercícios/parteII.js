const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const adcTurno = (a, b, c) => {
  a[b] = c;
}
adcTurno(lesson2, 'turno', 'noite');

console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const viewKeys = (obj) => {
  const keys = Object.keys(obj);
  return keys;
}

console.log(viewKeys(lesson3));

// Crie uma função para mostrar o tamanho de um objeto.

const tamObjet = (obj) => {
  const tamanho = Object.values(obj);
  return `tamanho do objeto: ${tamanho.length}.`;
}

console.log(tamObjet(lesson2));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const valueObj = (obj) => {
  const value = Object.values(obj);
  return value;
}

console.log(valueObj(lesson1));

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons);

const allLessons = () => {
  const newArray = {};
  Object.assign(newArray, {lesson1, lesson2, lesson3});
  return newArray;
}

console.log(allLessons())

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const contaAulas = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (let index = 0; index < 3; index += 1) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
}

console.log(contaAulas(allLessons()));

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const getValueByNumber = (obj, number) => {
  const value = Object.values(obj)[number];
  return value;
}

console.log(getValueByNumber(lesson1, 2));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const verifyPair = (obj, key, value) => {
  const array = Object.entries(obj);
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index][0] === key && array[index][1] === value)) {
      return true
    }
  }
  return false;
};
console.log(verifyPair(lesson1,'materia','Matemática'));


