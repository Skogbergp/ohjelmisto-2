'use strict';

const name = prompt('Enter your name');
console.log(name);
document.querySelector('#target').innerHTML = 'Hello ' + name + '!';