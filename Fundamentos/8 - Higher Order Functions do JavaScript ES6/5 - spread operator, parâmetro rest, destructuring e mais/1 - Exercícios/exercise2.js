const sum = (...number) => {
  const numero = number.reduce((acc, val) => {
    return acc + val;
  }, 0);
  return numero
}

console.log(sum(2, 4, 5, 6 ,8))