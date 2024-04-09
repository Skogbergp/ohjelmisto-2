'use strict';

let userInput = parseInt(prompt('Enter number'));
let numberArray = [];
numberArray.push(userInput);
while (userInput !== 0) {
  userInput = parseInt(prompt('Enter number'));

  numberArray.push(userInput);

}

for (let number of numberArray.sort((a,b) => a-b)) {
  console.log(number);
}