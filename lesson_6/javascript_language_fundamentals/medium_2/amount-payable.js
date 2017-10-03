var startingBalance = 1;
var chicken = 5;
var chickenQuantity = 7;

var totalPayable = function(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));

// The output on line 10 will be 40 because it is the chicken and chickenQuantity values as arguments,
// multiplying them together and then adding the starting value to this quantity before returning a
// new number object.

// Since startingBalance is reassigned on line 12, the output on line 13 will be quite similar to that
// on line 10, only it will add 10 instead of 5 for a return value of 45.

// The reason it is able to access the startingBalance is because of closures.

// Explanation:

// Closures have functions retain access to variables that are defined in an "enclosing scope". In the case of
// our program, the enclosing scope is the glboal (window) scope which contains the variables startingBalance,
// chicken and chickenQuantity. By retaining access, it means that the value of the variable is not fixed at
// the time when the function gets declared or first executed. The value is, instead, dynamically looked up 
// only at the time when the function gets declared or first executed. The value is, instead, dynamically
// looked up only at the time when the function is called. With this, the value of startingBalnce at line 6
// is not 1 but a reference to the value stored in the startingBalance variable in the global scope.

// as a result, when the totalPayable function is called for the first time, the value of startingBalance is 5;
// when the function is called for the second time, the value of startingBalance is 10.
