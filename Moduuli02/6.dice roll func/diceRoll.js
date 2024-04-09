function diceRoll() {
  return Math.floor((Math.random() * 6) + 1);
}

const ul = document.createElement('ul');
document.body.appendChild(ul);

let roll = diceRoll();
const rolls = [];
rolls.push(roll);

while (!(roll === 6)) {

  roll = diceRoll();
  rolls.push(roll);

}

for (num of rolls) {
  let li = document.createElement('li');
  li.textContent = num;
  ul.appendChild(li);
}