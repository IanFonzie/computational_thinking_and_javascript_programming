function indexOf(arr, value) {
	var index = -1;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			index = i;
			break;
		}
	}

	return index;
}

// Nearly an identical solution. I was simply storing the value in a variable that I
// could return after breaking. They opted to simply return the current index if it 
// was found or -1

function lastIndexOf(arr, value) {
	for (var i = arr.length - 1; i >= 0; i--) {
		if (arr[i] === value) {
			return i;
		}
	}

	return -1;
}

// Exact same solution