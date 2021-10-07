const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const finder = numbers.filter((value) => {
  return value % 2 === 0;
});

const reduce = (result, number) => {
    return result + number;
};

const getSum = finder.reduce(reduce);

console.log(getSum)