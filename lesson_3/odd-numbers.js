function logOddNumbers(number) {
	// for (var i = 1; i <= number; i += 2) {
	// 	console.log(i)
	// }

	for (var i = 0; i <= number; i++) {
		if (i % 2 === 0) {
			continue;
		}
		
		console.log(i);
	}
}

logOddNumbers(19);