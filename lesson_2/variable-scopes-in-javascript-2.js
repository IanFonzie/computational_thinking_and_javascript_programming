// 1. undefined 

// because scoping in JavaScript is function level, not block level (I thought it was). After hoisting this code becomes:

// function say() {
//   var a;
//   if (false) {
//     a = 'hello from inside a block';
//   }

//   console.log(a);
// }
// say();

// since a is declared but never assigned, line 7 logs undefined


// 2.
// notes:
// local variable a delcaration is hoisted to the top of the function scope.
// a is then reassigned to 'hello'
// console.log(a) is invoked and a resolves to 'hello'
// condition does not execute and a remains 'hello'
// when console.log(a) is invoked again, it is unable to find a because it was declared
// in the function scope and a reference error occurs

// hello
// Uncaught ReferenceError: a is not defined

// they wrote:

// hello
// Uncaught ReferenceError: a is not defined

// After hoisting,

// function hello() {
//   var a;
//   a = 'hello';

//   console.log(a);

//   if (false) {
//     a = 'hello again';
//   }
// }

// hello();
// console.log(a);

// a's scope is the body of hello(). Since there is no global variable named a, line 13 raises an error.

// 3.
// Notes:
// var a is hoisted to the top, as is var i
// a is reassigned to 'hello'
// the loop runs 5 times with a being reassigned to i each time
// final values are i = 5 a = 4
// 4 is logged when console.log(a) is invoked

// 4

// they wrote:

// 4

// JavaScript hoists the variable declaration on line 4 to the top of the
// global scope. Since a global variable named a exists, the hoist has no
// direct effect on operation. Inside the loop, a gets assigned five
// times; at the end of the loop, it has a value of 4. Thus, line 7 logs 4.

// 4.

// after hoisting:

// function foo() {
//   function bar() {
//     a = 3;
//     return 4;
//   }
//   a = 2;
//   return bar();
// }

// var a = 1;

// console.log(foo());
// console.log(a);

// Notes:

// a is declared and assigned one
// foo() is called
// a global variable is assigned 2
// bar() is called a is assigned 3
// 4 is logged
// 3 is logged when console.log(a) is invoked 

// 4
// 3

// they wrote:

// 4
// 3

// The foo function returns the return value of the bar function, which is 4.
// During this process, the code changes the global variable twice. Thus, 
// the final value is 3.

// 5. 

// Notes: global variable a is declared and assigned to 'global'
// checkScope() is invoked
// local variable a is declared in checkScope() and assigned 'local'
// nested() is invoked
// local variable a is declared in nested() and assigned 'nested'
// supernested() is invoked
// local variable a defined in nested() is assigned to 'supernested'
// 'supernested' is returned in supernested()

// which propagates to nested() and then to checkScope()
// 'supernested' is logged when console.log(checkScope()) is invoked
// console.log(a) is invoked in the global scope and the global variable a
// resolves to global

// supernested
// global

// they wrote: 

// supernested
// global

// With super-nested functions, you must chase through the functions starting
// with the function invocations. Here, we start with line 18, the first function
// invocation. From there, line 4 goes to line 5, line 5 to line 15, and so
// on through lines 6, 7, 12, 8, and 9. Line 9 obviously returns 'supernested',
// so line 12 must return 'supernested' too. This takes us back to line 15 which
// also returns 'supernested'. Finally, line 18 receives the final return value
// ('supernested') and logs it. During this entire process, we never modify the
// global a, so it still has the value global.

// 6. 

// function setScope(foo) {
//   foo = 'inner';
//   b = 'inner';
// }

// var a = 'outer';
// var b = 'outer';

// console.log(a);
// console.log(b);
// setScope(a);
// console.log(a);
// console.log(b);

// console.log(a) is invoked and the glboal variable a resolves to outer
// console.log(b) is invoked and the glboal variable b resolves to outer
// setScope is invoked and foo = 'inner' is set in the inner scope (a is an argument which makes
// 	it local to the function)
// b is assigned to inner
// console.log(a) is invoked and the glboal variable a resolves to outer
// console.log(b) is invoked and the glboal variable b resolves to inner

// they wrote:

// outer
// outer
// outer
// inner

// Function arguments become local variables in the function, so assigning
// to an argument has no effect on the original argument.

// 7. console.log(total) is invoked and the global variable total is resolved to 50 and logged
// incrementBy(10) is invoked and the total global variable is assigned itself plus 10
// console.log(total) is invoked and the global variable total is resolved to 60 and logged
// console.log(increment) is invoked and the global variable increment resolves to 15 and logged 
// increment is not affected by the increment parameter, which is local to the function 
// incrementBy(increment)

// 50
// 60
// 15

// they wrote: 

// 50
// 60
// 15
// Though our parameter has the same name as the variable declared on line 2, 
// it is not the same variable. Function arguments are locally scoped variables, 
// even when they have the same names as variables defined in the outer scope.

// 8. 

// var a is hoisted and declared. It's value is currently undefined
// var setScope is hoisted and declared. It's value is currently undefined
// a is assigned to 'outer'
// console.log(a) is invoked and a resolves to 'outer'
// setScope() attempts to be invoked but it's not a function so we get an error?

// outer
// Uncaught TypeError: setScope is not a function()

// they wrote:

// outer
// Uncaught TypeError: setScope is not a function(…)

// With hoisting, the above code is equivalent to:

// var a;
// var setScope;

// a = 'outer';

// console.log(a);
// setScope();
// console.log(a);

// setScope = function() {
//   a = 'inner';
// }

// Line 7 tries to call setScope as a function. However, it is just a declared
// global variable that doesn't have a defined value. Note unlike function
// declarations, function expressions are effectively the same as assignment
// operations; JavaScript hoists only the variable names, not the function bodies.