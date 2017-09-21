console.log(a);

var a = 1;

// This code will log undefined. The reason that a is undefiend is because the variable declaration is hoisted
// to the top of the code while the assignment remains where it currently is. This is equivalent to the code
// being:

// var a;
// console.log(a);

// a = 1;

// Explanation:

// on line 3 the program assigns the value o f1 to the variable a. Dissecting this there are actually two things
// happening: (1)it declares the variable a and (2) it assigns the value of 1 to it.

// with this we can now define hoisting. First, the JS interpret doesn't immediately execute code line by line. It
// goes over the code first to find and associate variable declaration with their appropriate scope. Visually,
// this is as if JavaScript moves ("hoists") the variable declaration to the the top of its scope. Assignments
// are not hoisted.

// Here is the code after hoisting:

// // var a;
// // console.log(a);

// // a = 1;

// given this new code, it becoems that the program logs undefined on line 2 since the assignment to 1 has not
// yet occured.