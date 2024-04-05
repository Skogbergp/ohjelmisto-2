const confirmation = confirm("Should i calculate square root")
const p = document.createElement("p")
document.body.appendChild(p)
if(confirmation){
  const num = parseFloat(prompt("Enter number"))
  if(num > 0){
    p.textContent = `square root of ${num} is ${Math.sqrt(num)}`
  }
  else{
    p.textContent = "The square root of a negative number is not defined."
  }
}else{
  p.textContent = "The square root is not calculated."
}
