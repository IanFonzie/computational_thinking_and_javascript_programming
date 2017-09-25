var row;
var i;
var j;

function padLeft(num) {
  return String(num).length <= 1 ? ' ' + num : num;
}

// Only loops from 1 till 9 here
for (i = 1; i < 10; i++) {
  row = '';
  for (j = 1; j <= 10; j++) {
    row += padLeft(i * j) + ' ';
  }
  console.log(row + '\n');
}


// Since this code only loops for i = 1 to i < 10 in the outer loop, it will not include the 10s row of the multiplication
// table. This can be fixed by changing the i < 10 statement to i <= 10;

// i.e.

// for (i = 1; i <= 10; i++) {
// 	row = '';
// 	for (j = 1; j <= 10; j++) {
// 		row += padLeft(i * j) + ' ';
// 	}

// 	console.log(row + '\n');
// }

// Answer: No. The code will only generate the multiplication table for the numbers 1 up to 9.

// Explanation: This is an example of an off-by-one bug. The value of i, which is responsible for the rows of the table,
// only goes up to 9. As such, the entire row for the values of 10 x 1, 10 x 2 ... 10 x 10 is not logged. It should have
// been written as:

// for (i = 1; i <= 10; i++) {
// 	row = '';
// 	for (j = 1; j <= 10; j++) {
// 		row += padLeft(i * j) + ' ';
// 	}

// 	console.log(row + '\n');
// }
