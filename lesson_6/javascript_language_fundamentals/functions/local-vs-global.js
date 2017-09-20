var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();

console.log(myVar);

// The code will log 'This is global' because the function declared and assigned inside
// of someFunction() is only scoped to that function despite having the same name as the
// global myVar variable. This inner variable shadows that outer variable and falls out
// of scope after the function executes.

// Their explanation:

// JavasScript uses lexical scope. This means that it determines the scope of the variable
// by the structure of the program. This program defines the myVar variable in two places. 
// The first is outsid eof any function. In this instance it has a global scope. The second
// place is inside the someFunction function. Functions in JavaScript create a new scope
// - in this case it is a scope that is 'local' to the function. Furthermore it becomes an
// 'inner' scope to the global 'outer' scope.

// Going back, console.log(muVar) on 9 logs This is global. This is because the myVar in
// line 1 and line 4 belong in different scopes; someFunction has its own 'local' scope and
// the myVar declaration done in its scope does not have an impact to an outer scope.