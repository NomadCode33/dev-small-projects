// TASKS
// 1) Is "else" required?
// Question: Will checkAge work differently if `else` is removed?
function checkAgeWithElse(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

function checkAgeWithoutElse(age) {
  if (age > 18) {
    return true;
  }
  return confirm('Did parents allow you?');
}


// 2) Doing checkAge without an if
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

// 3) Minimum number 
function min(a, b) {
  // Get the two numbers
  // Compare the two numbers
  // See if the number is less than the other number
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

//alert(min(6, 5))

// 4) Power
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}