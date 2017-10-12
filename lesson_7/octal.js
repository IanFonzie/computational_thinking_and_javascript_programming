function octalToDecimal(numberString) {
	// var power = numberString.length - 1;
  var decimalParts = numberString.split('').map(function(digitChar, index) {
  	// var number = Number(digitChar) * Math.pow(8, power)
  	// power -= 1;
  	// return number;
  	return Number(digitChar) * Math.pow(8, numberString.length - index - 1);
  });

  return decimalParts.reduce(function(sum, currentNumber) {
    return sum + currentNumber;
  });
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9

// Thinking in abstractions
// Split the input into an array of ddigits ([2, 3, 3]).
// Map this "digit" array to an array of digits multiplied by powers of eight ([128, 24, 3]);
// Reduce all the numbers to get the total value (155)

// This solution can take the shape of a single reduce:

function octalToDecimal(numberString) {
	return numberString.split('').reduce(function(sum, digitChar, index) {
		return sum + Number(digitChar) * Math.pow(8, numberString.length - index - 1);
	}, 0);
}

// Basically each time we perform this abstraction adding the result of the Number
// mulitplied by the appropriate power to the sum.