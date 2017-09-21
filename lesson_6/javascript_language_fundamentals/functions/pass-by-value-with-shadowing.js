var a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// Again, a the local variable a is being passed a value of 7 when the argument is called. Although
// this has the same name as the outer/global 'a' variable, it is still only able to access the local
// variable 'a' while the function is executing. Therefore this code will log '7'.

// Explanation: In javascript, parameters of a functiona re local to them. This means that the a inside of
// the function is a local variable to that function. As such, the addition of 10 to the value of a does
// not affect the global varaible a.