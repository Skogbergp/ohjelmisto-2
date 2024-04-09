function concat(arr) {
  let resultStr ="";
  for (let i = 0 ; i < arr.length;i++) {
    resultStr = resultStr + arr[i];
  }
  return resultStr;
}

const nameArray = ['Johnny', 'DeeDee', 'Joye', 'Marky'];

console.log(concat(nameArray));