const ftoc = (fahrenheit) =>
  Math.round((((fahrenheit - 32) * 5) / 9) * 10) / 10;

const ctof = (celsius) =>
  Math.round(((celsius * 9) / 5 + 32) * 10) / 10;

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
