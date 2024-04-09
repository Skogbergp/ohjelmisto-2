
let namesArray = [];
for (let i = 0; i < 5; i++) {
  namesArray.push(prompt('Enter name'));
}
const ulElement = document.createElement('ul');
document.body.appendChild(ulElement);

namesArray.sort().reverse();

for (name of namesArray) {
  let il = document.createElement('li');
  il.textContent = name;
  ulElement.appendChild(il)
}
