// function missing(arr) {
// 	var missing = [];

// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i + 1] - arr[i] !== 1) {
// 			for (var j = arr[i] + 1; j < arr[i + 1]; j++) {
// 				missing.push(j);
// 			}
// 		}
// 	}

// 	return missing;

// }

// want to start iteration at the beginning + 1 and stop at the end. Then we check to
// see if the integer is included in the original array; if it isn't then we include it
// in the result. Otherwise we don't include it. This is basically what I was planning
// on doing but I wanted to compare it character by character, which would have been
// difficult. They prefer to use indexOf instead of includes for some reason.

function missing(arr) {
	var start = arr[0] + 1;
	var end = arr[arr.length - 1];
	var missing = [];

	for (var i = start; i < end; i++) {
		if (!arr.includes(i)) {
			missing.push(i);
		}
	}

	return missing;
}