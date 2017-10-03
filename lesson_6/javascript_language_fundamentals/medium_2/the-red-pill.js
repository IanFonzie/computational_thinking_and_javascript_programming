function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne() {
    var result = '';
    for (var i = 0; i < arguments.length; i++) {
      result += String.fromCharCode(arguments[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101, 32));
    anotherOne(116, 111, 32);
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101, 32);
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33);

// does any work it needs to, like assigning arguments. Looks like it is calling another function after this, I believe
// it's calling anotherOne().

// So for the work that the function needs to do it will first call anotherAnotherOne which logs 'Welcome ' and calls
// anotherOne() with the arguments (t, o, ' '). anotherOne will build the string 'to ' and log it using the log() function.

// so far we have 'Welcome ' + 'to '

// after anotherAnotherOne() returns, we then call anotherOne again, this time with the arguments ('t', 'h', 'e', ' ').
// This will build the string 'the ' and log it using the log() function.

// Finally, we return anotherOne which is itself a function expression and pass it the arguments ('M', 'a', 't', 'r', 'i', 'x','!').
// This will build the string 'Matrix!' and log it using the log() function.

// We should have at the end of all this:

// 'Welcome '
// 'to '
// 'the '
// 'Matrix!'

// Explanation:

// The trick to this one is following along the function calls. The call to the one function may be a bit confusing but
// it is just successfunction calls because the return value of one is also a function. Notice that when the anotherOne
// function was returned, it still had access to the log function that's available in its enclosing scope (closure) inside
// the one function.

// Overall there are 8 function calls that happen in the code.

// 1: one();
// 2: anotherAnotherOne();                   // Welcome 
// 3: anotherOne(116, 111, 32);
// 4: log(result);                           // to 
// 5: anotherOne(116, 104, 101, 32);
// 6: log(result);                           // the 
// #7 was the function expression called in the global scope by one()
// This function is immediately invoked using the parentheses after one()(...)
// 7: anotherOne(77, 97, 116, 114, 105, 120, 33);
// 8: log(result);                           // Matrix
