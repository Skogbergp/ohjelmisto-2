'use strict';

const startYear = parseInt(prompt('Enter start year'));
const endYear = parseInt(prompt('Enter end year'));

const ul = document.createElement('ul');
console.log(ul);
document.body.appendChild(ul);
for (let year = startYear; year <= endYear; year++) {
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    let li = document.createElement('li');
    li.textContent = `${year}`;
    ul.appendChild(li);
  }
}