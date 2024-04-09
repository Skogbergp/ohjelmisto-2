'use strict';

const numArray = [];
let userNum = 0;

userNum = parseInt(prompt('Enter Number'));

while (!(userNum in numArray)) {

  numArray.push(userNum)
  userNum = parseInt(prompt('Enter Number'));
}
numArray.sort((a,b) => a-b)

for(let number of numArray){
  console.log(number);
}