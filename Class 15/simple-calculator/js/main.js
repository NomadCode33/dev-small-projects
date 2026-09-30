/*let total = 0

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)

function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub2() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
}*/

// Need a variable to hold the amount so functions can use this
let total = 0;

// Get the event listeners to click
document.querySelector('#zero').addEventListener('click', zero);
document.querySelector('#adThree').addEventListener('click', addThree);
document.querySelector('#adNine').addEventListener('click', addNine);
document.querySelector('#adFibe').addEventListener('click', addFive);
document.querySelector('#tractTwo').addEventListener('click', subtractTwo);

// Functions to simulate adding and subtracting and put it in the DOM
function zero() {
  total = 0;
  document.querySelector('#placeToPutResult').innerText = total;
}

function addThree() {
  total = total + 3;
  document.querySelector('#placeToPutResult').innerText = total;
}

function addFive() {
  total = total + 5;
  document.querySelector('#placeToPutResult').innerText = total;
}

function addNine() {
  total = total + 9;
  document.querySelector('#placeToPutResult').innerText = total;
}

function subtractTwo() {
  total = total - 2;
  document.querySelector('#placeToPutResult').innerText = total;
}