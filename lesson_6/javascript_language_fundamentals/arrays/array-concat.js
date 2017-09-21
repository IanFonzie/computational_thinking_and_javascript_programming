function concat(array1, secondArgument) {
	var newArray = array1.slice();

	if (Array.isArray(secondArgument)) {
		for (var i = 0; i < secondArgument.length; i += 1) {
			newArray.push(secondArgument[i]);
		}

	} else {
		newArray.push(secondArgument);
	}

	return newArray;
}

// My solution was similar to theirs except I copied to the newArray using Array.prototype.slice(). 
// Instead of setting new array indexes using newArray[newArray.length] = secondArgument[i], I used
// the push method to push either the array element or the argument to the newArray.

// Their solution:

function concat(array1, secondArgument) {
	var newArray = [];

	for (var i = 0, length = array1.length; i < length; i++) {
		newArray[i] = array1[i];
	}

	if (Array.isArray(secondArgument)) {
		for (var i = 0, length = secondArgument.length; i < length; i++) {
			newArray[newArray.length] = secondArgument[i];
		}
	} else {
		newArray[newArray.length] = secondArgument;
	}

	return newArray;
}

// Explanation:

// The solution makes use of two loops to join the two arrays. The first loop builds the base array,
// newArray, from array1. The second loop adds the secondArgument to the base array at every iteration.
// The tricky part is determining whether the second argument is an array o rnot. To check for this, the
// solution makes use of the Array.isArray() method. if it is an Array, the solution iterates over the 
// content of the array and adds each element to the base array; if it isn't an array, our solution adds
// the value directly to the end of the existing array.

// in the second loop, the index used when adding an element is the current length of the array. using
// this as the index always adds the new element immediately after the current last element.

// The built in method

// This exercise is a simple version of JavaScript's built in array concat method. This method is not
// limited to tocncatenating together two arrays and can be called directly from any JAvaScript array.

// var myArray = [1, 2, 3];
// var myOtherArray = ['a', 'b', 'c'];
// var myObject = { obj: 'myObject', };

// var newArray = myArray.concat(myOtherArray, myObject);
// console.log(newArray); // [ 1, 2, 3, 'a', 'b', 'c', { obj: 'myObject' } ]
// myObject.obj = 'yourObject';
// console.log(newArray); // [ 1, 2, 3, 'a', 'b', 'c', { obj: 'yourObject' } ]