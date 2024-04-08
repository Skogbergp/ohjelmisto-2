let inputArray = [];
for (i = 1; i <= 5; i++) {
  inputArray.push(prompt('Enter number'));
}

for (let i = inputArray.length -1; i >= 0; i--) {
  console.log(inputArray[i]);
}