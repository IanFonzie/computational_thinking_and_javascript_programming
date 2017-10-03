function invoiceTotal() {
  var sum = 0;

  for (var i = 0; i < arguments.length; i += 1) {
  	sum += arguments[i];
  }

  return sum;
}

invoiceTotal(20, 30, 40, 50);             // works
invoiceTotal(20, 30, 40, 50, 40, 40);     // doesn't work; how can you make it work?

// Explanation:

// It may seem that the refactored solution is not accepting parameters but in fact it does. In JavaScript, it
// is possible to have more or less arguments passed in than the defined parameters and there will be no error.
// In addition to this, JavaScript also makes an arguments object available inside any function while it's 
// invoked. The arguments object is array-like and it contains all the arguments passed in.

// The solution leveraged these two characteristics of Functions to refactor the invoiceTotal to accept a variable
// numer of amounts to add up.