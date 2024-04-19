"use strict"

const trigger  = document.querySelector("#trigger");
const target = document.querySelector("#target")

trigger.addEventListener("mouseenter",function(){
  target.src = "img/picB.jpg";
})

trigger.addEventListener("mouseout",function(){
  target.src = "img/picA.jpg";
})