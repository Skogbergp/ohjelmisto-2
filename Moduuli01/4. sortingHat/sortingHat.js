const randNum = Math.floor((Math.random() * 4) + 1);
const name = prompt('Enter name');

const p = document.querySelector('#house');

switch (randNum){
  case 1:
    p.innerHTML = name + ' you are  Gryffindor';
    break;

  case 2:
    p.innerHTML = name + ' you are Slytherin';
    break;

  case 3:
    p.innerHTML = name + ' you are Hufflepuff';
    break;

  case 4:
    p.innerHTML = name + ' you are Ravenclaw';
    break
}
