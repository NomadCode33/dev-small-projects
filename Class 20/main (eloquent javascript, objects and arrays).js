///////// Data Structures-Objects and Arrays

////// THE SUM OF A RANGE
// Write a range function that takes two arguments, start and end, and returns
//  an array containing all the numbers from start up to and including end.

// Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third 
// argument that indicates the “step” value used when building the array. If 
// no step is given, the elements should go up by increments of one, corresponding
// to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
// Make sure this also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

// write function with parameters start and end
// need a loop to iterate from start to end
// from the loop, we need to add 1 for each including the end to get entire range

function range(start, end) {
    numbers = [];
    for(let i = start; i <= end; i++) {
        numbers.push(i);
    }
    return numbers;
}

console.log(range(2,5));

// has parameter of an array passed in
// need a for loop to go through the entirety of array
// need a variable to keep track and tally of the entire values
function sum(array) {
    sum = 0;
    for(i = 0; i < array.length; i++) {
        sum += array[i];
        console.log(sum);
    }
    return sum;
}

console.log(sum(range(1,10)));

// forEach method
function sum2(arr) {
    sum = 0;

    arr.forEach(num => {
        sum += num;
    })
    return sum;
}

console.log(sum2(range(1,10)));



////// REVERSE ARRAY
// 1) Pure function: returns a brand-new reversed array.
function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

// 2) In-place function: mutates the original array to reverse its elements.
function reverseArrayInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
}

// Demonstration:
let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));  // → ["C", "B", "A"]
console.log(myArray);               // → ["A", "B", "C"]  (original unchanged)

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);            // → [5, 4, 3, 2, 1]


////// A LIST
// Build a list data structure: nested objects where each one holds a value
// and a reference (rest) to the next object. The last rest is null.
// Write arrayToList, listToArray, prepend, and nth (plus a recursive nth).

// arrayToList
// parameter: an array
// build the list from the back so each new node can point at the one before it
// start with list = null (the end of the chain), then wrap it one element at a time
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}

// listToArray
// parameter: a list
// start at the first node, push its value, then move to node.rest
// stop when the node becomes null
function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

// prepend
// parameters: an element and a list
// make a new node that holds the element and points at the old list
// the old list is untouched, the new list just shares its structure
function prepend(value, list) {
    return { value, rest: list };
}

// nth (loop version)
// parameters: a list and a number
// walk down the list n times, if we run out of nodes return undefined
function nth(list, n) {
    let node = list;
    for (let i = 0; i < n && node; i++) {
        node = node.rest;
    }
    return node ? node.value : undefined;
}

// nth (recursive version)
// base case 1: no list left, so the position doesn't exist -> undefined
// base case 2: n is 0, so this node is the one we want
// otherwise: ask the rest of the list for position n - 1
function nthRecursive(list, n) {
    if (!list) return undefined;
    if (n === 0) return list.value;
    return nthRecursive(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nthRecursive(arrayToList([10, 20, 30]), 1));
// → 20


////// DEEP COMPARISON
// == compares objects by identity (same object in memory).
// Write deepEqual: true if the values are the same, or if they are objects
// with the same properties whose values are also deepEqual.
// Watch out: typeof null is "object".

// if both are strictly equal (===), we're done -> true
// if either one isn't an object, or either one is null, they can't be deep
// compared, and since === already failed -> false
// otherwise compare the keys:
//   different number of keys -> false
//   for each key in a: b must have it, and deepEqual on the two values must be true
function deepEqual(a, b) {
    if (a === b) return true;

    if (typeof a !== "object" || a === null ||
        typeof b !== "object" || b === null) return false;

    let keysA = Object.keys(a);
    let keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }

    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true