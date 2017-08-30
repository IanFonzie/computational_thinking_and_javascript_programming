// function isXor(value1, value2) {
// 	value1 = !!value1
// 	value2 = !!value2

// 	if ((value1 === true && value2 === false) ||
// 		 (value1 === false && value2 === true)) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// personal refactor: 

// function isXor(value1, value2) {
// 	if ((value1 && !value2) || (!value1 && value2))
// 		return true;
// 	else {
// 		return false;
// 	}
// }

// my solution, a little verbose. The conditions will evaluate themselves 
// using their implicit truthyness and falsyness, so there is no need to convert
// using the !! operator

// also, to confirm a value is false you can just use the bang (!) unary operator.
// so instead of value2 === false, I could have done !value2

// function isXor(value1, value2) {
// 	if (value1 && !value2) {
// 		return true;
// 	}

// 	if (!value1 && value2) {
// 		return true;
// 	}

// 	return false;
// }

// function isXor(value1, value2) {
// 	if (value1 && !value2) {
// 		return true; 
// 	} else if (!value1 && value2) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// function isXor(value1, value2) {
// 	return !!((value1 && !value2) || (!value1 && value2));
// }

// the two exclamation points (!!) coerce the return toa  boolean value. Logical operators
// return the value of the values of the operands and not a boolean value. without the !! 
// the function returns the truthy (i.e. 'a' or 2) or falsey (i.e. '') values. The !! 
// guarantees the result is boolean

// or

function isXor(value1, value2) {
	return Boolean(value1) !== Boolean(value2);
}

// This solution is basically returning whether or not both values evaluate to the same
// boolean values. if they are both true or false then this statement will return false
// but if one is true and the other is false then it will return true.

// the refactored isXor function does perform short-circuit evaluation. if the first condition
// is true then the rest of the code will not be executed. Short circuit evaluation makes sense in isXor
// functions if there are two choices. It can assume that there is no need to check the other value
// because it is binary. if there were more choices then short circuiting probably wouldn't make sense.
