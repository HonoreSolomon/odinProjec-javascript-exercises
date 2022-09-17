const sumAll = function (min, max) {
  if (
    min < 0 ||
    max < 0 ||
    !Number.isInteger(min) ||
    !Number.isInteger(max)
  )
    return 'ERROR';
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  const getSum = function (max, min) {
    if (max <= min) {
      return max;
    }
    return max + sumAll(max - 1, min);
  };
  return getSum(max, min);
};

// Do not edit below this line
module.exports = sumAll;
