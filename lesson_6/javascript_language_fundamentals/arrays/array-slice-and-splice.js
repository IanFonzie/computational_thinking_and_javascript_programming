// function slice(array, begin, end) {
// 	var newArray;
// 	if (begin > array.length) {
// 		begin = array.length;
// 	}

// 	if (end > array.length) {
// 		end = array.length;
// 	}

// 	newArray = [];
// 	for (var i = begin; i < end; i += 1) {
// 		newArray.push(array[i]);
// 	}

//  	return newArray;
// }

// function splice(array, start, deleteCount) {
//   var removed;
//   var temp;

//   if (start > array.length) {
//   	start = array.length;
//   }

//   if (deleteCount > array.length - start) {
//   	deleteCount = array.length - start;
//   }

// 	removed = [];
// 	temp = [];

// 	for (var i = array.length - 1; i >= start; i -= 1) {
// 		temp.push(array.pop());
// 	}

// 	temp.reverse();

// 	if (arguments.length > 3) {
// 		for (var i = 3; i < arguments.length; i += 1) {
// 			array.push(arguments[i]);
// 		}
// 	}

// 	for (var i = 0; i < deleteCount; i += 1) {
// 		removed.push(temp.shift());
// 	}

// 	while (temp.length !== 0) {
// 		array.push(temp.shift());
// 	}

// 	return removed;
// }

// First solution was basically the same except with the ternary operator.

function slice(array, begin, end) {
	var result = [];

	begin = begin > array.length ? array.length : begin;
	end = end > array.length ? array.length : end;

	for (var i = begin; i < end; i++) {
		result.push(array[i]);
	}

	return result;
}

function splice(array, start, deleteCount) {
	start = start > array.length ? array.length : start;
	deleteCount = deleteCount > (array.length - start) ? array.length - start : deleteCount;

	var arrayCopy = array.slice();
	// Determine number of arguments to be added.
	var itemCount = Array.prototype.slice.call(arguments, 3).length
	var newLength = array.length + itemCount - deleteCount;
	// Assign new length to array.
	array.length = newLength;

	// Copy start of array.
	for (var i = 0; i < start; i++) {
		array[i] = arrayCopy[i];
	}

	// Add additional arguments if they exist.
	for (var i = 0; i < itemCount; i++) {
		array[start + i] = arguments[3 + i];
	}

	// length is the length of the copy - the start value and the deleteCount.
	// basically determines the number of items left over after subtracting those
	// two values
	for (var i = 0, length = arrayCopy.length - (start + deleteCount); i < length; i++) {
		// Will Add the number of values remaining after argument items are added to the 
		// original array and will set it equal to the item in the original array after the start
		// and the number of elements to delete.
		array[start + itemCount + i] = arrayCopy[start + deleteCount + i];
	}

	// Return array portion that was deleted from the copy.
	// Does not even keep tracl of these values, just pulls them
	// from the arrayCopy
	return slice(arrayCopy, start, start + deleteCount);
}

// This solution is basically just rebuilding the array from a copy and the list of arguments, whereas
// my solution subtracted everything up to the beginning and then started to rebuild. Their solution is
// more efficient.

// Explanation: The slice function is straightforward. The solution loops through the elements of the original
// array starting from the begin index up to but not including the end index and pushes those values to a new
// array. The thing to handle for the slice functions are the values to use depending on the arguments passed 
// to begin and end. The two ternary statements at the top of the function handle these. If either of the values
// are greater than the array's length, it's values are set to it.

// The splice function is more difficult to implement because it mutates the original array and there are two
// things happening; deleting and adding elements. Like slice, it first initializes the values for the start
// and deleteCount using two ternary statements at the top of the function. it then caches the original array values
// in arrayCopy for use later when it "mutates" it. Following this, it gets the count of items for adding, if any,
// using the arguments object. It counts the elements starting from index 3 up to the end; note that the first 3
// arguments are the array, start and deleteCount. Finally it reassigns the length of the original array by offsetting 
// its current length by the difference itemCount and deleteCount

// The next step is to assign values to each individual element in the array. It is done this way so that the reference
// to the original array is not lost and it only mutates it. The next 3 loops incrementally mutate the array starting
// from left to right.

// 1. the first loop copies back start number of elements from the array to the original array. if start is 0 then
// no values are copied for this loop.
// 2. The next loop mutates the value of the original array starting from start. it gets the values, if any, from the
// optional items arguments. 
// 3. The third and final loop mutates the values in the original array starting from start + itemCount (the count of
// elements added by the first two loops).it again gets the values from arrayCopy. It starts with the first element after
// the last element removed by deleteCount; put another way these are the elements after start + deleteCount. For example:

// // Given the following:
// arr = [1, 5, 6, 1, 2] ;
// start = 2;
// deleteCount = 2;

// The first element in the third loop will be 2. 
// 6 is the element at index 'start'.
// Since 'deleteCount' is 2, elements '6' and '1' are not copied back anymore.

// Finally, it uses the slice function to return items removed/extracted from the original array.

// The difference between this statement var itemCount = Array.prototype.slice.call(arguments, 3).length 
// and the one from the lesson is the presence of the second argument. This is the equivalent statement after
// borrowing the slice method: arguments.slice(3). In short, the value 3 is the argument passed for the slice
// method.

// Built-in Method:

// We implemented functions similar to Array.prototype.slice() and Array.prototype.splice(). The built-in methods
// are more powerful. They handle a wider ranger of inputs (i.e. variable/no arguments passed or negative values).