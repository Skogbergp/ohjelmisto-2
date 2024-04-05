'use strict';

const num = parseInt(prompt('Enter number'));
let isPrime = true;

const p = document.createElement('p');
document.body.appendChild(p);

if (num <= 2) {
  isPrime = false;
} else {
  for (let i = Math.floor(num / 2); i > 1; i--) {
    if (Math.floor(num % i) === 0) {

      isPrime = false;
    }
  }
}
console.log(isPrime);

if (isPrime === true) {
  p.textContent = `${num} is prime number`;
} else {
  p.textContent = `${num} is not prime number`;
}