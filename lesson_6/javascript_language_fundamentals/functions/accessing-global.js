var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();

console.log(myVar);

// This function has the side effect of modifying the value of the global myVar variable. This
// occurs in this circumstance because the myVar variable referenced in someFunction is assigning
// the value 'This is local' to the global myVar variable, instead of declaring a new myVar in the
// local function scope.

// Explanation: The someFunction function changes hte value of myVar when it gets reassigned to a new
// value. This is because JavaScript variables in the global scope can be accessed and changed inside 
// an inner scope.