"use strict"

function calculator(numbers, operator) {
    console.log(operator)
    const num1 = parseInt(numbers[0]);
    const num2 = parseInt(numbers[1]);
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}

function calc(evt) {
    const resultHtml = document.getElementById('result');
    const calculation = document.getElementById('calculation').value;

    let result = 0;
    let numArr

    let op = null

    if (calculation.includes("+")) {
        op = "+"
        numArr = calculation.split("+")
        result = calculator(numArr, op)
    } else if (calculation.includes("-")) {
        op = "-"
        numArr = calculation.split("-")
        result = calculator(numArr, op)
    } else if (calculation.includes("*")) {
        op = "*"
        numArr = calculation.split("*")
        result = calculator(numArr, op)
    } else if (calculation.includes("/")) {
        op = "/"
        numArr = calculation.split("/")
        result = calculator(numArr, op)
    }
    console.log(result)
    resultHtml.textContent = result

}

const button = document.querySelector('#start');
button.addEventListener('click', calc);
