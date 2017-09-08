// function oddElementsOf(arr) {
// 	var odds = [];

// 	for (var i = 0; i < arr.length; i++) {
// 		if (i % 2 === 1) {
// 			odds.push(arr[i]);
// 		}
// 	}

// 	return odds;
// }

// They just started on oddElements whereas I specifically checked if each element was odd.

function oddElementsOf(arr) {
	var oddElements = [];

	for (var i = 1; i < arr.length; i += 2) {
		oddElements.push(arr[i]);
	}

	return oddElements;
}

function combinedArray(even, odd) {
	var combinedArray = [];
	
	for (var i = 0; i < even.length; i++) {
		combinedArray.push(even[i]);
		combinedArray.push(odd[i]);
	}

	return combinedArray;
}

// function mirroredArray(arr) {
// 	var newArr = [];

// 	for (var i = 0; i < arr.length; i++) {
// 		newArr.push(arr[i]);
// 	}

// 	for (var i = arr.length - 1; i >= 0; i--) {
// 		newArr.push(arr[i]);
// 	}

// 	return newArr;
// }

function mirroredArray(arr) {
	return arr.concat(arr.slice().reverse());
}

// my solution did not use array methods which significantly shortens the solution. Should
// probably look at these first before attempting my own solution. Was easy once I saw 
// their "algorithm".

// Notes: does not work to call arr.reverse in arr.concat because reverse mutates the value
// of the original array. so when you can concat you are concatenating to reverse arrays 
// instead of one in the original order and one in the reversed order. The easy solution is
// to duplicate the array and then reverse it. Use slice to duplicate the array.

// Slice performs a shallow copy; it doesn't create copies of the element values just the
// array srcutre. This is usually fine for most duplication operations. You should always keep
// this in mind since both arrays now share the objects stored in each element. i.e. references
// will be to the same objects.

// function sortDescending(arr) {
// 	return arr.slice().sort(function compareNumbers(a, b) {
// 		return a - b;
// 	}).reverse();
// }

// They used the compare function to force the sort in descending order whereas I sorted and
// reversed it after. This was inefficient.

function sortDescending(arr) {
	var arrCopy = arr.slice();
	return arrCopy.sort(function compareNumbers(a, b) {
		return b - a;
	});
}

// function matrixSums(arr) {
// 	var sumsArray = [];

// 	for (var i = 0; i < arr.length; i++) {
// 		var total = arr[i].reduce(function(sum, value) {
// 			return sum + value;
// 		});

// 		sumsArray.push(total);
// 	}

// 	return sumsArray;
// }

// I used the reduce method to determine the sum and then pushed the sum to the array.
// They used nested loops, presumably because we haven't learned about blocks/closures
// yet.

function matrixSums(arr) {
	var sumsArray = [];
	var currentSum;

	for (var i = 0; i < arr.length; i++) {
		currentSum = 0;
		for (var j = 0; j < arr[i].length; j++) {
			currentSum += arr[i][j];
		}

		sumsArray.push(currentSum);
	}

	return sumsArray;
}

// function uniqueElements(arr) {
// 	var unique = [];
// 	var current;

// 	for (var i = 0; i < arr.length; i++) {
// 		current = arr[i];
// 		if (arr.slice(0, i).includes(current)) {
// 			continue;
// 		}

// 		unique.push(current);
// 	}

// 	return unique;
// }

// My solution checked to see if the current element was in the elements up to but not
// including the current element. Their solution checked to see if the uniques array
// already included the current element. If it didn't then they would add it to the 
// array. I think their solution is more efficient.

function uniqueElements(arr) {
	var uniques = [];

	for (var i = 0; i < arr.length; i++) {
		if (uniques.indexOf(arr[i]) === -1) {
			uniques.push(arr[i]);
		}
	}

	return uniques;
}

// Much easier to check an array for the existence of an element than to create one and see if
// any of the elements contain the current index. Need to remember this for next time.