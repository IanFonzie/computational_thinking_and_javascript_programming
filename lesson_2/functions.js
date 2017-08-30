function average(values) {
	return sum(values) / values.length;
}

// Their solution:

// function average(values) {
//   var total = 0;
//   for (var i = 0, len = values.length; i < len; i++) {
//     total += values[i];
//   }

//   // Note that len is still available here.
//   // The local variable was created at the start of the for loop.
//   return total / len;
// }

// they set a value len instead using values.length directly in the loop.

function sum(values) {
	var total = 0;

	for (var i = 0; i < values.length; i++) {
		total += values[i];
	}

	return total;
}

var temperatures = [22, 19, 25, 24, 21];

console.log(average(temperatures));

// Their solution:

// function average(values) {
//   return sum(values) / values.length;
// }

// function sum(values) {
//   var total = 0;
//   for (var i = 0, len = values.length; i < len; i++) {
//     total += values[i];
//   }

//   return total;
// }

// console.log(average([3, 3, 3, 3, 3]));