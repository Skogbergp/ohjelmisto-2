const numOfNames = parseInt(prompt('Enter number of names'));
let namesArray = [];
for (let i = 0; i < numOfNames; i++) {
  namesArray.push(prompt('Enter name'));
}
const ulElement = document.createElement('ul');
document.body.appendChild(ulElement);

namesArray.sort();

for (name of namesArray) {
  let il = document.createElement('li');
  il.textContent = name;
  ulElement.appendChild(il)
}
