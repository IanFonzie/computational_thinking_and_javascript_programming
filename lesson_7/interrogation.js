function myOwnEvery(array, func) {
	for (var i = 0; i < array.length; i += 1) {
		if (!func(array[i])) {
			return false;
		}
	}

	return true;
}

var isAString = function(value) {
  return typeof value === 'string';
};

myOwnEvery(['a', 'a234', '1abc'], isAString);       // true
