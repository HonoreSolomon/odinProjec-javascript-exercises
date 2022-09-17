const removeFromArray = (...args) => {
  const arr = args[0];
  return arr.filter((element) => !args.includes(element));
};
// Do not edit below this line
module.exports = removeFromArray;
