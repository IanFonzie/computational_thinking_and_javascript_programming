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

	for (var i = startIdx, i < endIdx; i++) {
		push(slicedArr, arr[i]);
	}

	return slicedArr;
}