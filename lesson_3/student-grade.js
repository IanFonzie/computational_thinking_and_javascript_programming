// var score1 = parseInt(prompt('Enter score 1:'), 10);
// var score2 = parseInt(prompt('Enter score 2:'), 10);
// var score3 = parseInt(prompt('Enter score 3:'), 10);

// var average = (score1 + score2 + score3) / 3;

// var grade;
// if (average >= 90) {
// 	grade = 'A';
// } else if (average >= 70) {
// 	grade = 'B';
// } else if (average >= 50) {
// 	grade = 'C';
// } else {
// 	grade = 'F';
// }

// console.log('Based on the average of your 3 scores your letter grade is "' + grade + '".');

// solutions are again quite similar. They use Number('string') to explicitly coerce the 
// input into a number instead of parseInt.

// they separate the average from the total and calculate the total in a separate statement.
// they check for explicit ranges, though in a refactoring they use a solution to similar to
// what I used where they only check if the average is above a given threshold isntead of 
// within a range.

function average(grades) {
	var sum = 0

	for (var i = 0; i < grades.length; i++) {
		sum += grades[i];
	}

	return sum / grades.length;
}

gradeCount = prompt('How many grades do you need to record: ');
grades = [];

for (var i = 0; i < gradeCount; i++) {
	var score = Number(prompt('Enter score ' + (i + 1) + ':'));
	grades.push(Number(score));
}

var average = average(grades);

// var grade;
// if (average >= 90) {
// 	grade = 'A';
// } else if (average >= 70 && average < 90) {
// 	grade = 'B';
// } else if (average >= 50 && average < 70) {
// 	grade = 'C';
// } else {
// 	grade = 'F';
// }

// Refactor:

var grade = 'F';
if (average >= 90) {
	grade = 'A';
} else if (average >= 70) {
	grade = 'B';
} else if (average >= 50) {
	grade = 'C';
}

console.log('Based on the average of your 3 scores your letter grade is "' + grade + '".');
