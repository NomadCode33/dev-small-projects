/////// FUNCTION EXPRESSION
// The syntax that we used before is called a Function Declaration as such:
// function sayHi() {
//  alert( "Hello" );
//}

// There is another syntax for creating a function that is called a Function Expression.
// It allows us to create a new function in the middle of any expression.
//let sayHi = function() {
//    alert( "Hello" );
//  };

// FUNCTION IS A VALUE
// Copying another function to a variable
//function sayHi() {   // (1) create
//    alert( "Hello" );
//  }
  
//  let func = sayHi;    // (2) copy
  
//  func(); // Hello     // (3) run the copy (it works)!
//  sayHi(); // Hello    //     this still works too (why wouldn't it)

// We could also have used a Function Expression to declare sayHi, in the first line:
let sayHi = function() { // (1) create
    alert( "Hello" );
  };
  
  let func = sayHi;  //(2)
  // ...

// CALLBACK FUNCTIONS
//function ask(question, yes, no) {
//    if (confirm(question)) yes()
//    else no();
//  }
  
//  function showOk() {
//    alert( "You agreed." );
//  }
  
//  function showCancel() {
//    alert( "You canceled the execution." );
//  }
  
//  // usage: functions showOk, showCancel are passed as arguments to ask
//  ask("Do you agree?", showOk, showCancel);

// We can use function expressions to create a shorter function
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );

// FUNCTION EXPRESSION VS. FUNCTION DECLARATION
// Function Declaration: a function, declared as a separate statement, in the main code flow:
// Function Declaration
function sum(a, b) {
    return a + b;
  }

// Function Expression
// Function Expression
let sum = function(a, b) {
    return a + b;
  };

// A Function Expression is created when the execution reaches it and is usable only from that moment.
// A Function Declaration can be called earlier than it is defined.
sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}

// If it were a function expression, it wouldn't work
// sayHi("John"); // error!

// let sayHi = function(name) {  // (*) no magic any more
//   alert( `Hello, ${name}` );
// };
