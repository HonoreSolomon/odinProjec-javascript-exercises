const palindromes = (word) => {
  const trimmedWord = word
    .toLowerCase()
    .replace(/[^a-z]/g, '');
  return (
    trimmedWord.split('').reverse().join('') == trimmedWord
  );
};
// Do not edit below this line
module.exports = palindromes;
