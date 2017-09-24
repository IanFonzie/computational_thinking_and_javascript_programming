// function areArraysEqual(array1, array2) {
// 	if (array1.length !== array2.length) {
// 		return false;
// 	}

// 	var array1Sorted = array1.slice().sort();
// 	var array2Sorted = array2.slice().sort();	

// 	for (var i = 0; i < array1Sorted.length; i += 1) {
// 		if (array1Sorted[i] !== array2Sorted[i]) {
// 			return false;
// 		}
// 	}

// 	return true;
// }

// I chose to sort the arrays but I did think of doing something similar to what they did.
// Go through the elements in the first array, check to see if the index appears in the second
// array then remove that index from the second array. Thus if the same element comes up again,
// it won't find it at that index. This works until we have an element that is in the first array
// but not in the second or until we reach the end of the first array, at which point it will return
// true.

// Their Solution:

function areArraysEqual(array1, array2) {
	if (array1.length !== array2.length) {
		return false;
	}

	var index;
	for (var i = 0; i < array1.length; i += 1) {
		index = array2.indexOf(array1[i]);
		if (index >= 0) {
			array2.splice(index, 1);
		} else {
			return false;
		}
	}

	return true;
}

// Explanation: As with the previous comparison function, this version also has the guard clause that checks whether the
// two arrays are of equal length. The difference lies in the iteration. In this version, one of the arrays, array2, gets
// searched. The search checks at every iteration if the value at the current index of array1 exists anywhere in array2
// using the Array.prototype.indexOf method. If it does exist, array2 gets mutated by removing the value found. If none
// exist, the iteration stops, and the function returns false. The two arrays will be the same if the loop is able to finish,
// at which point all the values will have been mathced. It is improtant that mutation happens on array2 since if it doesn't
// then the last test (areArraysEqual([1, 1, 2, 2], [4, 3, 2, 1])) would return true. Note that since array1 and array2 are 
// of equal length, the search could have been on array1 and not array2.

// For my learning:

// function areArraysEqual(array1, array2) {
// 	if (array1.length !== array2.length) {
// 		return false;
// 	}

// 	var index;
// 	for (var i = 0; i < array1.length; i += 1) {
// 		index = array2.indexOf(array1[i]);
// 		if (index >= 0) {
// 			array1.splice(index, 1);
// 		} else {
// 			return false;
// 		}
// 	}

// 	return true;
// }

// classic example of mutating the caller. Causes the loop to miss certain arguments because its length
// shortens each time it is spliced. There will still be arguments left to check but the loop thinks that
// it has finished executing. Also means that a subset of a set can work because it's not actually checking
// removing duplicate values. It's simply removing the values from the first list while leaving the second list
// intact, so values that matched in the first place, will be able to match again. Need to remove from the pool
// of options, not from our candidates.