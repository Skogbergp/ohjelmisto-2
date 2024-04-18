'use strict';

const button = document.querySelector('#start');
button.addEventListener('click', calc);

function calc(evt) {
  const resultHtml = document.querySelector('#result');
  const val1 = parseInt(document.querySelector('#num1').value);
  const val2 = parseInt(document.querySelector('#num2').value);
  const operation = document.querySelector('#operation').value;
  let result = 0;

  switch (operation) {
    case 'add':
      result = val1 + val2;
      break;
    case 'sub':
      result = val1 - val2;
      break;
    case 'multi':
      result = val1 * val2;
      break;
    case 'div':
      result = val1 / val2;
      break;
  }
  resultHtml.innerText = result;
}