const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (numbers) => {
  const sum = numbers.reduce(
    (previous, current) => previous + current,
    0
  );
  return sum;
};

const multiply = (numbers) =>
  numbers.reduce((total, num) => total * num);

const power = (num, power) => Math.pow(num, power);

const factorial = (num) => {
  return num > 1 ? num * factorial(num - 1) : 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
