var a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a)

// THis function will log 7, because it is equivalent to declaring a new variable b within
// within the function myValue(number) and assigning it a value of 7. This new variable will 
// be equal to itself + 10 but will fall out of scope after the function completes execution.

// Explanation:

// JavaScript is "pass-by-value". Passing varaiable a to myValue binds the local variable b to the
// value of 7 and this doesn't interfere with the outer variable a. Thus, when the program logs the 
// vlue of a to the console its value remains the same.