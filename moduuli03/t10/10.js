"use strict"

const form = document.querySelector('form')
form.addEventListener("submit",printNames)

function printNames(evt){
  evt.preventDefault()
  const fName = document.querySelector('input[name="firstname"]').value
  const lName = document.querySelector('input[name="lastname"]').value
  const p = document.querySelector("#target")
  p.textContent = `your name is ${fName} ${lName}`
}