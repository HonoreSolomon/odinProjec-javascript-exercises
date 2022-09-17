const findTheOldest = (ageArr) => {
  return ageArr.reduce((oldest, person) => {
    const oldestAge = getAge(
      oldest.yearOfBirth,
      oldest.yearOfDeath
    );
    const personAge = getAge(
      person.yearOfBirth,
      person.yearOfDeath
    );
    return oldestAge < personAge ? person : oldest;
  });
};
const getAge = (birth, death) => {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};
// Do not edit below this line
module.exports = findTheOldest;
