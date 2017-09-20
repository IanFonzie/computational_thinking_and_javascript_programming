var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// This code will log 'This is local' to the console. Based on lexical scoping rules the myVar variable
// declared in someFunction will shadow or prevent access to the global myVar variable. Therefore when
// myVar is logged in someFunction() the only myVar accessible will be the one declared in the function.

// Explanation:

// The console.log(myVar) is inside the function. Recall that the myVar variable is in both a global (line 1)
// and local (line 4) scope. Supposedly, variables in the global scope ar eaccessible anywhere within the
// program. however, in this instance, JavaScript gives priority to the variable with the same
// name that is in a local scope. This behavior is called shadowing.