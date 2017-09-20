var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// This code will log 'This is global' because it is accessing the global variable
// myVar, which we've already observed is accessible inside the functional scope.

// Explanation: when console.log tries to log the value of myVar it will start to check
// within its current scope for its value. if it doesn't exist it will look at the next
// outer scope and see if the variable exists at that scope. it will continue doing this 
// until it matches the outer most (global) scope.

// Given the sample code, it goes up one scope level and logs the value 'This is global'.