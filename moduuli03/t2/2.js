'use strict';

const targetUl = document.querySelector("#target")

const firstLi = document.createElement('li');
const secondLi = document.createElement('li');
const thirdLi = document.createElement('li');

firstLi.innerHTML = "first item";
secondLi.innerHTML = "second item";
thirdLi.innerHTML ="third item";

targetUl.appendChild(firstLi);
targetUl.appendChild(secondLi);
targetUl.appendChild(thirdLi)

document.getElementsByTagName("li")[1].classList.add("my-item")



