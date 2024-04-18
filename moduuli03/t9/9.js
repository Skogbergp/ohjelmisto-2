function calculator(num1, num2, operator) {
  switch (operation) {
    case '+':
      result = val1 + val2;
      break;
    case '-':
      result = val1 - val2;
      break;
    case '*':
      result = val1 * val2;
      break;
    case '/':
      result = val1 / val2;
      break;
  }
}
function calc(evt) {
    const resultHtml = document.getElementById('result');
    const calculation = document.getElementById('calculation').value;
    const calcArray = calculation.split("/");
    let result = 0;
    console.log(calcArray);
}

const button = document.querySelector('#start');
button.addEventListener('click', calc);
