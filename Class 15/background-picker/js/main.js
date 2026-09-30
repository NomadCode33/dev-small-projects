/*// Get the element
document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue

// Create functions to when you select the elment, it changes background and color
function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}*/



/*// Get the element
document.getElementById('purple').onclick = () => toggleColor('rgba(241,63,247,1)')
document.getElementById('green').onclick = () => toggleColor('rgba(0,253,81,1)');
document.getElementById('blue').onclick = () => toggleColor('rgba(0,254,255)');
document.getElementById('red').onclick = () => toggleColor('rgba(255, 0, 0, 1)');

// Create functions to when you select the elment, it changes background and color
function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

function partyRed() {
  document.querySelector('body').style.backgroundColor = 'rgba(255, 0, 0, 1)'
  document.querySelector('body').style.color = 'white'
}*/



// Allows the background to be changed to white when you click on the button again
function toggleColor(colorValue) {
  const body = document.querySelector('body');
  const currentBg = body.style.backgroundColor;

  if (currentBg === colorValue) {
    // If the current color is already this one, reset it to default
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
  } else {
    // Otherwise, set it to the selected color
    body.style.backgroundColor = colorValue;
    body.style.color = 'white';
  }
}

// Assigns the elements
// The reason why the thing didn't work earlier is due to the rgba values not reading in properly
// So it had to be changed to rgb instead
document.getElementById('purple').onclick = () => toggleColor('rgb(241, 63, 247)');
document.getElementById('green').onclick = () => toggleColor('rgb(0, 253, 81)');
document.getElementById('blue').onclick = () => toggleColor('rgb(0, 254, 255)');
document.getElementById('red').onclick = () => toggleColor('rgb(255, 0, 0)');

/*// Event listeners
document.getElementById('purple').onclick = function () {
  toggleColor('rgb(241, 63, 247)');
};
document.getElementById('green').onclick = function () {
  toggleColor('rgb(0, 253, 81)');
};
document.getElementById('blue').onclick = function () {
  toggleColor('rgb(0, 254, 255)');
};
document.getElementById('red').onclick = function () {
  toggleColor('rgb(255, 0, 0)');
};*/