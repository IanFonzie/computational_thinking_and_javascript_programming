// var i = 0;
// while (i < 10) {
//   if (i % 3 === 0) {
//     console.log(i);
//   } else {
//     i += 1;
//   }
// }

// This code will infinitely log the first number that is divisible by 3. This will 
// occur because the code needed to increment the i variable is only present in the else clause.
// In order to rectify this the code would need to be moved to after the if condition and not
// be a direct part of it.

// Answer: No the expected behavior will not happen. It will be an infinite loop that logs 0 to the
// console.

// Explanation: It becomes an infinite loop because the value of i is never incremented. The expression
// (i % 3 === 0) will always be true and as such the else clause that contains the incrementer never
// gets executed. When using a while loop, you have to be wary about managing the variables involved with
// the iteration and the stopping condition. In the case of this exercise, i should have been incremented
// at every iteration, like so:

var i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } 

  i += 1;
}

// or 

for (var i = 0; i < 10; i += 1) {
	if (i % 3 === 0) {
		console.log(i);
	}
}