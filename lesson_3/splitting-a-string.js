function splitString(string, delimiter) {
	var splitString = '';

	if (delimiter === undefined) {
		console.log('ERROR: No delimiter');
		return;
	} else if (delimiter === '') {
		for (var i = 0; i < string.length; i++) {
			console.log(string[i]);
		}

		return;
	}

	for (var i = 0; i < string.length; i++) {
		if (string[i] === delimiter || i === string.length - 1) {
			if (i === string.length - 1 && string[string.length - 1] !== delimiter) {
				console.log(splitString + string[string.length - 1])
			} else {
				console.log(splitString);
			}
			splitString = '';
		} else if (string[i] !== delimiter) {
			splitString += string[i];
		} 

	}
}

