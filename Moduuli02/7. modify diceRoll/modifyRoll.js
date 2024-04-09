function diceRoll(sides) {
  return Math.floor((Math.random() * sides) + 1);
}
const userSides = parseInt(prompt("Enter how many sides you want"))
const ul = document.createElement('ul');
document.body.appendChild(ul);

let roll = diceRoll(userSides);
const rolls = [];
rolls.push(roll);

while (!(roll === userSides)) {

  roll = diceRoll(userSides);
  rolls.push(roll);

}

for (num of rolls) {
  let li = document.createElement('li');
  li.textContent = num;
  ul.appendChild(li);
}