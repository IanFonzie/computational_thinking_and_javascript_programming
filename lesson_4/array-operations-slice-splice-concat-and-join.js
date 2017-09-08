function push(array, value) {
  array[array.length] = value;
  return array.length;
}

function pop(array) {
  var newLength = array.length - 1;
  var value = array[newLength];
  array.length = newLength;
  return value;
}

function unshift(array, value) {
  for (var i = array.length; i > 0; i--) {
    array[i] = array[i - 1];
  }

  array[0] = value;
  return array.length;
}

function shift(array) {
  var first = array[0];
  for (var i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }

  array.length = array.length - 1;
  return first;
}

function indexOf(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}

function lastIndexOf(array, value) {
  for (var i = array.length - 1; i >= 0; i--){
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}

// function slice(arr, startIdx, endIdx) {
// 	var slicedArr = [];
// 	var slicedIdx = 0;

// 	for (var i = startIdx; i < endIdx; i++) {
// 		slicedArr[slicedIdx] = arr[i];
// 		slicedIdx++;
// 	}

// 	return slicedArr;
// }

// Should have used push for this solution, still had my mind on not being able to use methods
// but we can use functions that we wrote previously

// rewrite:

function slice(arr, startIdx, endIdx) {
	var slicedArr = [];

	for (var i = startIdx; i < endIdx; i++) {
		push(slicedArr, arr[i]);
	}

	return slicedArr;
}

// function splice(arr, start, numRemoved) {
// 	var removed = [];
// 	var startArray = [];

// 	for (var i = 0; i < start; i++) {
// 		push(startArray, shift(arr));
// 	}

// 	for (var i = 0; i < numRemoved; i++) {
// 		push(removed, shift(arr));
// 	}

// 	for (var i = startArray.length - 1; i >= 0; i--) {
// 		unshift(arr, startArray[i]);
// 	}

// 	return removed;
// }

// Their solution:

// function splice(array, begin, number) {
// 	var removedValues = [];
// 	for (var i = begin; i < array.length; i++) {
// 		if (i < begin + number) {
// 			push(removedValues, array[i]);
// 		}

// 		array[i] = array[i + number];
// 	}

// 	array.length = array.length - number;
// 	return removedValues;
// }

// basically a removedValues array is declared and initialized to be empty. Then starting with the 
// number defined as the beginning index, we iterate until the end of the array. if the index is less
// than the beginning index + the number then we add it to the removed values array and make the current
// value equal equal to the value at the current index + the number offset. if our offset is 3, then the
// value at array[3] will become the value at array[6] and so on. eventually this will set a few undefined
// values when we try to access values at indexes larger than the array. To trim these we simply set the 
// array.length to be itself minus the number of elements that we've chosen to remove. Finally, we 
// return the removed values.

// This was completely different than what I was thinking, will attempt to rewrite. Their soltuion
// works because everything is being shifted a set number of spaces to the left and we will always 
// have that many left at the end regardless of how many we remove. just remember in the future
// you can shift values are remove the remainder to get the actual desired value.

function splice(arr, start, num) {
	var removed = [];
	for (var i = start; i < arr.length; i++) {
		if (i < start + num) {
			push(removed, arr[i]);
		}

		arr[i] = arr[i + num];
	}

	arr.length -= num;
	return removed;
}

function concat(arr1, arr2) {
	var newArr = [];

	for (var i = 0; i < arr1.length; i++) {
		push(newArr, arr1[i]);
	}

	for (var i = 0; i < arr2.length; i++) {
		push(newArr, arr2[i]);
	}

	return newArr;
}

// function join(arr, string) {
// 	var joinString = '';

// 	for (var i = 0; i < arr.length; i++) {
// 		if (i === arr.length - 1) {
// 			joinString += String(arr[i]);
// 		} else {
// 			joinString += String(arr[i]) + string;
// 		}
// 	}

// 	return joinString;
// }

// similar solutions here, mine checked each time if i = arr.length - 1. if it was we would only
// add the string but add the string and the separator otherwise. What they opted to do was add
// the array element to the join string regardless of whether or not it was the last element. Then
// they would check to see if it was one less than the array length. they would add the separateor to 
// the joing string if it was. Not sure which is more efficient but this code reads a bit nicer than
// mine. Need to remember that I don't need to add an entire string at once and can add multiple times
// in a loop

function join(array, separator) {
	var result = '';

	for (var i = 0; i < array.length; i++) {
		result += String(array[i]);

		if (i < array.length - 1) {
			result += separator;
		}
	}

	return result;
}