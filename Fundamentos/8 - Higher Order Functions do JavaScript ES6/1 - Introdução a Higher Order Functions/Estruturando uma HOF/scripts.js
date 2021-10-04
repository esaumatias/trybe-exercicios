const wakeUp = () => {
  return 'Acordado!!';
};

const breakfast = () => {
  return 'Bora tomar café!!';
}

const sleep = () => {
  return 'Partiu dormir';
}

const doingThings = (func) => {
  return func();
}

console.log(doingThings(acordado));
