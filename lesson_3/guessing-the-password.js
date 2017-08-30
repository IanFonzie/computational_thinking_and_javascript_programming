// var password = 'password';
// var guessCount = 0;
// var message;

// while (guessCount < 3) {
// 	var guess = prompt("What is the password?");

// 	if (guess === password) {
// 		message = "You have successfully logged in.";
// 		break;
// 	}

// 	guessCount++;
// }

// message = message || 'You have been denied access';
// console.log(message);

// my solution seems to share some similarites with theirs, at least on the second one.
// both set a passwor dand count the attempts. a do loop is used instead of a while loop
// (can't really see the reasoning behind this?)

// instead of creating a message variable  they simply check the count of failed attempts 
// after the loop has been broking. if the count is 3 then they log that access has been 
// denied and that they have been successfully logged in otherwise.

// var password = 'password';
// var failedAttempts = 0;

// do {
// 	var guess = prompt('What is the password:');

// 	if (guess === password) {
// 		break;
// 	}

// 	failedAttempts++;
// } while (failedAttempts < 3);

// if (failedAttempts === 3) {
// 	console.log('You have been denied access.');
// } else {
// 	console.log('You have been successfully logged in.');
// }

// first solution is slightly different. Password and failed attempts are declared and 
// initialized at the top.

// uses a loop: while (true) (this is an infinited loop). If a user guesses the password 
// then the program will log that the user has been logged in and break out of the infinite
// loop. otherwise the failedAttempts counter will increment and if failedAttempts equals 3 
// then the program will log 'You have been denied access' and break out of the infinit loop

var password = 'password';
var failedAttempts = 0;

while (true) {
	var guess = prompt('What is the password:');

	if (guess === password) {
		console.log('You have been successfully logged in.');
		break;
	}

	failedAttempts++;

	if (failedAttempts === 3) {
		console.log('You have been denied acces.');
		break;
	} 
}