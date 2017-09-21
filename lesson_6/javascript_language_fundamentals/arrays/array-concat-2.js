function concat(array1, secondArgument) {
	var newArray = [];
	var args = Array.prototype.slice.call(arguments);

	for (var i = 0, length = array1.length; i < length; i++) {
		newArray[i] = array1[i];
	}

	for (var i = 1; i < args.length; i += 1) {
		if (Array.isArray(args[i])) {
			for (var j = 0, length = args[i].length; j < length; j += 1) {
				newArray[newArray.length] = args[i][j];
			}
		} else {
			newArray[newArray.length] = args[i];
		}
	}
	

	return newArray;
}

