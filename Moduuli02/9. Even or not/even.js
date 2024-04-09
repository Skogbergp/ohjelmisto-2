'use strict';

function even(arr) {
  const evenArr = [];
  arr.forEach((num) => {
    if (num % 2 === 0) {
      evenArr.push(num);
    }
  });
  return evenArr;
}

const numberArray = [1, 2, 3, 4, 5, 22, 14, 335, 122345, 12232, 32];
console.log(even(numberArray));