const num1 = parseInt(prompt('Enter first Number'));
const num2 = parseInt(prompt('Enter second number'));
const num3 = parseInt(prompt('Enter third number'));

const sum = num1 + num2 + num3;
const average = sum / 3;
const product = num1 * num2 * num3;

document.querySelector('#sum').textContent = 'Sum is ' + sum;
document.querySelector('#average').textContent = 'average is ' + average;
document.querySelector('#product').textContent = 'product is ' + product;
