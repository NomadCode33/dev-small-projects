///////// TRANSLATE BORDER-LEFT-WIDTH to borderLEFTWIDTH
// Write the function camelize(str) that changes dash-separated words like “my-short-string”
// into camel-cased “myShortString”. That is: removes all dashes, each word after
// dash becomes uppercased.

function camelize(str) {
  let words = str.split("-");
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join("");
}

camelize("my-short-string");

///////// SORT IN DECREASING ORDER
let arr = [5, 2, 1, -10, 8];

arr.sort( (a, b) => b - a );


// Sort in increasing order
// arr.sort( (a, b) => a - b );

//alert( arr ); // 8, 5, 2, 1, -10

///////// FILTER RANGE
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher
// or equal to a and lower or equal to b and return a result as an array. The function should not modify
// the array. It should return the new array.

// For instance:
/*
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

*/

// Filters out numbers that are higher or equal to a and lower and equal to b
// we need to go through the entire array, so a for loop is in order
// we need conditionals for it to recognize what is higher or lower than
// return the results as an array, so I need an empty array

// let arr = [5,3,8,1];
let arrae = [2,5,6,7,10,8];

function filterRange(array, a, b) {
    let newArray = [];
    for(i = 0; i < array.length; i++) {
        if (array[i] >= a && array[i] <= b) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

let filtered = filterRange(arrae, 5, 9);
alert(arrae);
alert(filtered);

///////// FILTER RANGE "IN PLACE"
// Write filterRangeInPlace(arr, a, b) that removes every value from the array
// that is NOT between a and b (inclusive). It changes the original array and
// returns nothing.

// parameters: the array, a (lower limit), b (upper limit)
// go through the array with a for loop and check each value
// if the value is outside of a to b, remove it with splice
// splice shifts everything left, so the next value lands on the same index
// so I have to step i back by one after a removal, or I skip a value

let rangeArr = [5, 3, 8, 1];

function filterRangeInPlace(array, a, b) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < a || array[i] > b) {
            array.splice(i, 1);
            i--;
        }
    }
}

filterRangeInPlace(rangeArr, 1, 4);
console.log(rangeArr); // [3, 1]


///////// COPY AND SORT ARRAY
// Write copySorted(arr) that returns a sorted copy of an array of strings
// without changing the original array.

// sort() changes the array it's called on, so I can't call it on the original
// slice() with no arguments makes a copy, then sort the copy
// return the sorted copy

let languages = ["HTML", "JavaScript", "CSS"];

function copySorted(array) {
    return array.slice().sort();
}

let sortedLanguages = copySorted(languages);
console.log(sortedLanguages); // ["CSS", "HTML", "JavaScript"]
console.log(languages);       // ["HTML", "JavaScript", "CSS"] (no changes)


///////// CREATE AN EXTENDABLE CALCULATOR
// Make a constructor function Calculator.
// Part 1: calculate(str) takes a string like "3 + 7" (number, operator, number,
// separated by single spaces) and returns the result. It understands + and -.
// Part 2: addMethod(name, func) teaches the calculator a new operator. func is
// a function that takes two arguments (a, b).

// store the operators in an object (this.methods) where the key is the operator
// and the value is the function that does the math
// calculate: split the string by spaces -> [number, operator, number]
// convert the numbers from strings with Number()
// if the operator isn't known or a number isn't valid, return NaN
// otherwise look up the operator's function and call it with a and b
// addMethod: just adds a new key/value pair to this.methods

function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    };

    this.calculate = function(str) {
        let parts = str.split(" ");
        let a = Number(parts[0]);
        let operator = parts[1];
        let b = Number(parts[2]);

        // Object.hasOwn so inputs like "toString" aren't treated as operators
        if (!Object.hasOwn(this.methods, operator) || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[operator](a, b);
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

let calc = new Calculator();
console.log(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
console.log(powerCalc.calculate("2 ** 3")); // 8


///////// MAP TO NAMES
// Given an array of user objects that each have a name, create an array
// that holds only the names.

// map() runs a function on every item and returns a new array of the results
// for each user, return user.name

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(user => user.name);
console.log(names); // ["John", "Pete", "Mary"]


///////// MAP TO OBJECTS
// Given an array of users with name, surname and id, create a new array of
// objects that have id and fullName (name + surname).

// map() again, but this time each item turns into an object
// fullName is built with a template string from name and surname
// catch: an arrow function that returns an object literal needs () around the
// {}, otherwise JS reads the { as the start of the function body

let johnFull = { name: "John", surname: "Smith", id: 1 };
let peteFull = { name: "Pete", surname: "Hunt", id: 2 };
let maryFull = { name: "Mary", surname: "Key", id: 3 };

let fullUsers = [johnFull, peteFull, maryFull];

let usersMapped = fullUsers.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

console.log(usersMapped[0].id);       // 1
console.log(usersMapped[0].fullName); // John Smith


///////// SORT USERS BY AGE
// Write sortByAge(users) that sorts an array of objects by their age property.

// sort() with a compare function, same idea as sorting numbers
// a.age - b.age gives increasing order (youngest first)
// sort() changes the array itself, so nothing to return

function sortByAge(array) {
    array.sort((a, b) => a.age - b.age);
}

let usersByAge = [pete, john, mary];

sortByAge(usersByAge);
console.log(usersByAge[0].name); // John
console.log(usersByAge[1].name); // Mary
console.log(usersByAge[2].name); // Pete


///////// SHUFFLE AN ARRAY
// Write shuffle(array) that randomly reorders the array's elements.
// Every possible order must have an equal chance of happening.

// array.sort(() => Math.random() - 0.5) looks like it works but it's biased,
// because sort() isn't built to take a random comparison
// use the Fisher-Yates shuffle instead:
// start at the last index and walk backwards
// pick a random index j from 0 to i (inclusive)
// swap array[i] with array[j]

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let numbers = [1, 2, 3];

shuffle(numbers);
console.log(numbers); // different order each run


///////// GET AVERAGE AGE
// Write getAverageAge(users) that takes an array of objects with an age
// property and returns the average age: (age1 + age2 + ... + ageN) / N

// reduce() carries a running total through the array
// start the total at 0, add each user's age to it
// divide the total by how many users there are

function getAverageAge(array) {
    return array.reduce((total, user) => total + user.age, 0) / array.length;
}

let ageUsers = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 29 }
];

console.log(getAverageAge(ageUsers)); // 28


///////// FILTER UNIQUE ARRAY MEMBERS
// Write unique(arr) that returns an array with only the unique items of arr.

// need an empty array for the results
// go through every item, and if the results array doesn't already have it,
// push it in
// includes() checks that, but it walks the whole results array each time,
// so it's slow on huge arrays
// shorter alternative: [...new Set(array)] (Set only keeps unique values)

function unique(array) {
    let result = [];

    for (let item of array) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }

    return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings)); // ["Hare", "Krishna", ":-O"]


///////// CREATE KEYED OBJECT FROM ARRAY
// Write groupById(arr) that turns an array of users ({id, name, age}) into an
// object where each id is the key and the whole user is the value.
// Use reduce. Assume every id is unique.

// reduce() starting with an empty object {}
// for each user, add a property: obj[user.id] = user
// return the object every time so it carries to the next call

function groupById(array) {
    return array.reduce((obj, user) => {
        obj[user.id] = user;
        return obj;
    }, {});
}

let usersToGroup = [
    { id: "john", name: "John Smith", age: 20 },
    { id: "ann", name: "Ann Smith", age: 24 },
    { id: "pete", name: "Pete Peterson", age: 31 }
];

let usersById = groupById(usersToGroup);
console.log(usersById);
// { john: {...}, ann: {...}, pete: {...} }