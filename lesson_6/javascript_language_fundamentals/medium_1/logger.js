function debugIt() {
	// creates a local variable scope 
  var status = 'debugging';
  // This is hoisted above status
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// After Hoisting:

function debugIt() {
	// This is only the declaration, doesn't matter that status hasn't been declared yet.
	// Function has side effects because it is calling the log method using the status
	// local variable declared in debug it.
	function logger() {
    console.log(status);
  }
	// creates a local variable scope but it is still accessible within the function
	// logger();
  var status = 'debugging';
  
  logger();
}

debugIt();


// This code will log debugging because when debugIt() is called, the logger() function
// declared inside of it is hoisted internally by JavaScript's interpreter. Although the
// declaration has the side effect of referencing the status local variable, this should
// not affect the output of the program because the status local variable is declared and 
// assigned when the logger function is actually called. This will print the value of status.

// Their Explanation:

// The status variable on line 4 is debugging because of JavaScript's lexical scoping rules.

// The debugIt function creates a local variable called status and a function called logger.
// logger is an inner function with access to variables declared in its outer scope due to
// lexical scoping rules.

// Takeaways:

// Remember that you can refer to lexical scoping rules to describe whether or not a variable
// or function is accessible within a certain scope.