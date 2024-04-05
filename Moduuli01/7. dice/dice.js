const diceAmount = parseInt(prompt("Enter amount of dice"))

const p = document.createElement("p")
document.body.appendChild(p)
function throwDice(){
  return Math.floor((Math.random()*6)+1)
}
let diceSum = 0;

for(let i = 0; i <diceAmount; i++){
  diceSum += throwDice();
}
p.textContent = `sum of thrown dice is ${diceSum} `
