// 1. Logs 'outer' for the first console.Log, then the function
// testScope() is called which creates a shadow variable for a and Logs
// 'inner' and finally 'outer' is logged again when console.log(a) is called
// in the global scope

// outer
// inner
// outer
// they wrote: line 8 is the first invocation of console.log(); here a resolves as
// the global variable. Line 9 the testScope() function; in the function, a
// resolves as the local variable so line 5 logs inner. after testScope() returns the a on line 10 resolves as the 
// global variable again; therefore it logs outer.

// 2. logs 'outer' when a resolves as the global variable; in the function
// a is reassigned to 'inner' which is then logged; after testScope()
// the a on line 10 resolves to the reassigned variable again and logs 'inner'

// outer
// inner
// inner
// they wrote: on line 4 a resolves as the global variable; the assignment assigns inner to the variable. 
// Thus line 10 logs 'inner'instead of 'outer'

// basket assignment notes
// empty
// tv (not logged)
// computer (not logged)
// play station (logged not stored)

// 3. function goShopping is hoisted to the top; basket is declared before goShopping() is called. Then functions shop(1),
// shop(2) & shop(3) are hoisted within the goShopping() function. the console.log invocation occurs and resolves basket
// to the global variable which is currently empty. then shop(1) is invoked and basket
// is assigned to 'tv'; shop(2) is invoked and basket is assigned to computer; shop(3) is invoked and 
// a new variable basket is declared in the local scope that shadows the original global variable. Console.log(basket) is
// invoked and the local variable basket is resolved to play station. Finally console.log(basket) is invoked and basket resolves
// to the original global variable which was last assigned to computer which is then logged.

// empty
// playstation
// computer

// they wrote: The first log operation occurs on line 8; here, basket still has its original value, empty. The function call on 
// line 19 changes basket to tv, and the call on line 20 changes it to computer. The function call on line 21 does not alter the 
// value of the basket global, but defines and sets a local variable with the same name. It then logs play station. Upon returning 
// from shop3, the local variable goes away, so line 23 logs the value of the global basket: computer.

// 4. a is not found in the lexical scope when it is assigned in the function hello(). therefore a new global variable
// a is created and console.log(a) resolves a to 'hello'.

// hello

// they wrote: 

// hello
// Here, we call the hello() function, so we assign a value of hello to the variable. The variable is a global 
// variable since we don't declare it with var. Thus, line 6 logs hello.

// Note that this is nearly identical to what happens when we explicitly declare a at the global level:

// var a;

// function hello() {
//   a = 'hello';
// }

// hello();
// console.log(a);

// However, there is a subtle difference: without an explicit declaration, 
// a becomes a property of the global object. We discuss objects in more 
// detail later and why this extremely subtle distinction matters. For now, 
// though, you just need to know that a is available everywhere in the program.

// 5. Reference error occurs because a is defined as a local variable in the function scope and is
// not available to console.log(a) in the global scope.

// Uncaught ReferenceError: a is not defined

// they wrote: since we don't define a global variable a, line 6 does not find any variables named a 
// and raises a ReferenceError

// 6. undefined

// the declaration of a is hoisted to the top of the global scope and then console.log(a) is invoked. It is then
// resolved to undefined since it has not yet been assigned a value. After it has been logged, a is then assigned to
// 1.

// they wrote:

// undefined

// After hoisting, this program is equivalent to:

// var a;
// console.log(a);
// a = 1;

// Line 2 logs undefined since we declared a but never assigned it a value.

// 7. Uncaught ReferenceError: a is not defined

// after hoisting the program is equivalent to 

// function hello() {
// 	a = 1;
// }

// console.log(a);

// we defined hello(), but we never call it so a value is never assigned to a. Since we don't declare a anywhere
// line 5 produces a ReferenceError.

// if a hello() was called, it would log 1 because it is declaring a global variable within a function since a has not
// 	been defined anywhere else in the program

// they wrote:

// Uncaught ReferenceError: a is not defined

// After hoisting, this program is equivalent to:

// function hello() {
//   a = 1;
// }

// console.log(a);

// We define hello(), but never call it, so we never assign a value to a. Since we also 
// don't declare a anywhere, line 5 produces a ReferenceError.
