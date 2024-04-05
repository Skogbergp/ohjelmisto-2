const year = parseInt(prompt("Enter Year"))
const p = document.createElement("p")

document.body.appendChild(p)

if((0 == year % 4) && (0 != year%100) || (0 == year % 400)){
  p.textContent = `${year} is leap year`
}
else(
    p.textContent = `${year} is not leap year`
)
