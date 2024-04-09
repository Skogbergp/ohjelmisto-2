'use strict';

function throwDice(throws) {
  let sum = 0;
  for (let i = 0; i < throws; i++) {
    sum += Math.floor((Math.random() * 6) + 1);
  }
  return sum;
}

const userSum = parseInt(prompt('Enter sum you want'));
const numDice = parseInt(prompt('Enter number of dice'));

let howManyTimes = 0;
const simulatedRolls = 100000
for (let i = 0; i < simulatedRolls; ++i) {
   if(throwDice(numDice) === userSum){
     howManyTimes++
   }
}
let prob = (howManyTimes / simulatedRolls)*100;
const p = document.createElement('p');

document.body.appendChild(p);

p.textContent = `probability to get sum ${userSum} with ${numDice} dice is ${prob.toFixed(2)}%`
