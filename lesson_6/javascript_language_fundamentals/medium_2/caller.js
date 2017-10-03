// function doubler(number, caller) {
//   console.log('This function was called by ' + caller + '.');
//   return number + number;
// }

// doubler(5, 'Victor');       // 10
// This function was called by Victor.

function makeDoubler(caller) {
	// Returned an anonymous function, that gets called when we call the variable
	// that stores the returned value of this function.
	return function(number) {
		console.log('This function was called by ' + caller + '.');
		return number + number;
	}; // need this here because it is technically a return statement.
}

var doubler = makeDoubler('Victor');
doubler(5);

// Based on the requirement that makeDoubler has to take a caller name and return a doubler function, we'll
// have: (I had the exact same solution).

// What's interesting here is that the returned function expression that's assigned to variable doubler still
// retains access to the caller variable in its closure, even after the makeDoubler function returns.