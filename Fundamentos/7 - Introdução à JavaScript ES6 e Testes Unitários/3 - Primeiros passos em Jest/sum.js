function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// myRemove.js
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function encode(stringEncode) {
  let newStringEncode = "";
  for (let i = 0; i < stringEncode.length; i++) {
    switch (stringEncode[i]) {
      case "a":
        newStringEncode +=  "1";
        break;
      case "e":
        newStringEncode += "2";
        break;
      case "i":
        newStringEncode +=  "3";
        break;
      case "o":
        newStringEncode +=  "4";
        break;
      case "u":
        newStringEncode +=  "5";
        break;
      default:
        newStringEncode +=  stringEncode[i];
        break;
    }
  }
  return newStringEncode;
}

function decode(stringDecode) {
  let newStringEncode = "";
  for (let i = 0; i < stringDecode.length; i++) {
    switch (stringDecode[i]) {
      case "1":
        newStringEncode += "a";
        break;
      case "2":
        newStringEncode += "e";
        break;
      case "3":
        newStringEncode += "i";
        break;
      case "4":
        newStringEncode += "o";
        break;
      case "5":
        newStringEncode += "u";
        break;
      default:
        newStringEncode +=  stringDecode[i];
        break;
    }
  }
  return newStringEncode;
}

// techList.js
const techList = (arrayTech, name) => {
  if (arrayTech.length === 0) return 'Vazio!';

  const sortedArray = arrayTech.sort();
  const technologyList = [];

  for (let index = 0; index < sortedArray.length; index += 1) {
    technologyList.push({
      tech: sortedArray[index],
      name,
    });
  }

  return technologyList;
};

const hydrate = (string) => {
  const splitString = string.split('');
  let glassesOfWater = 0;

  for (let index = 0; index < splitString.length; index += 1) {
    const parsedCharacter = parseInt(splitString[index]);

    if (parsedCharacter) {
      glassesOfWater += parsedCharacter;
    }
  }

  let glass = 'copo';

  if (glassesOfWater > 1) {
    glass = 'copos';
  }

  return `${glassesOfWater} ${glass} de água`;
}

// implemente seus testes aqui

module.exports = {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate};