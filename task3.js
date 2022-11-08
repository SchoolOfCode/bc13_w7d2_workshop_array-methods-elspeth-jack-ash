let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

//find multiples of the following - 3, 5, 60, 90
//Using the modular operator we will find if there's a remainder
//If there is a remainder it will return as "true"
//else will return as false
const no3 = 3;
const no5 = 5;
const no60 = 60;
const no90 = 90;

function multipleOfThree() {
  const result = someNumbers.length % no3 === 0;
  return result;
}

function multipleOfFive() {
  const result = someNumbers.length % no5 === 0;
  return result;
}

function multipleOfSixty() {
  const result = someNumbers.length % no60 === 0;
  return result;
}

function multipleOfNinety() {
  const result = someNumbers.length % no90 === 0;
  return result;
}

// console.log(multipleOfThree);
console.log(someNumbers.some(multipleOfThree));
console.log(someNumbers.some(multipleOfFive));
console.log(someNumbers.some(multipleOfSixty));
console.log(someNumbers.some(multipleOfNinety));
