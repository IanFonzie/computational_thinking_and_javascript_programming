function firstElementOf(arr) {
	return arr[0];
}

function lastElementOf(arr) {
	return arr[arr.length - 1];
}

function nthElementOf(arr, index) {
	return arr[index];
}

// 4. We can insert data into an array at a negative index because all arrays are objects
// in JavaScript. the nuance here is that the added element becomes part of the array 
// object but it isn't properly one of the array elements. The digits.length property
// remains unchanged.

// function firstNOf(arr, count) {
// 	firstN = [];

// 	for (var i = 0; i < count; i++) {
// 		firstN.push(arr[i]);
// 	}

// 	return firstN;
// }

// Slightly different, they used slice and passed our count argument as an arugment to that
// function. Leads to more concise code.

function firstNOf(arr, count) {
	return arr.slice(0, count);
}

// function lastNOf(arr, count) {
// 	return arr.slice(arr.length - count, arr.length);
// }

// didn't need the last argument because it will go all the way to the end of the array if it's
// not provided.

function lastNOf(arr, count) {
	var start = arr.length - count;

	if (start < 0) {
		start = 0;
	}

	return arr.slice(start);
}

// when we pass a count greater than the array length, the arithmetic in the function becomes a
// negative value as a position relative to the end of the array. if we pass a count of 9 with
// our digits array, lastNOf calls slice with an argument of -3. slice thus returns the final three
// elements of digits.

// function endsOf(beginningArr, endingArr) {
// 	var ends = [];
// 	ends.push(beginningArr[0]);
// 	ends.push(endingArr[endingArr.length - 1]);

// 	return ends;
// }

// they used an array literal instead of declaring and pushing to a new array

function endsOf(beginningArr, endingArr) {
	return [beginningArr[0], endingArr[endingArr.length - 1]];
}