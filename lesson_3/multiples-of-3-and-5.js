function multiplesOfThreeAndFive(min, max) {
	for (var i = min; i <= max; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log(String(i) + '!');
		} else if (i % 3 === 0 || i % 5 === 0) {
			console.log(String(i));
		}
	}
}

multiplesOfThreeAndFive(5, 15);