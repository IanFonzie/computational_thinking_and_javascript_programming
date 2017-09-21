function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// When you assign to a function without using a var declaration. It automatically creates a global
// variable that is accessible anywhere in the program. Since a global variable was accidentally declared
// in the someFunction() function, it is still within scope when it is called as an argument to 
// console.log(myVar). Therefore this code will log 'This is global'.

// Explanation:

// Notice that in line 2 there is no variable declaration for myVar. As a result of this, JavaScript
// does a lookup in an outer scope for the declaration. Since there is none in the outer scopes,
// JavaScript binds it to be a 'property' of the global object (global.myVar =; for the sake of understanding).
// This is "almost" the same as if myVar was globally declared.