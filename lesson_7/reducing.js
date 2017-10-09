function myReduce(array, func, initial) {
	var accumulator;
	var index;

	if (initial === undefined) {
		accumulator = array[0];
		index = 1;
	} else {
		accumulator = initial;
		index = 0;
	}

	array.slice(index).forEach(function(element) {
		accumulator = func(accumulator, element);
	});

	return accumulator;
}

var smallest = function(result, value) {
  return result <= value ? result : value;
};

var sum = function(result, value) {
  return result + value;
};

myReduce([5, 12, 15, 1, 6], smallest);           // 1
myReduce([5, 12, 15, 1, 6], sum, 10);            // 49

function longestWord(words) {
  return myReduce(words, longest);
}

var longest = function(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
};

longestWord(['abc', 'launch', 'targets', '']);      // "targets"