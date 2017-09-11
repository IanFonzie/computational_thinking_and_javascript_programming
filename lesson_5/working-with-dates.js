var today = new Date();

console.log(today);

// console.log('Today\'s day is ' + today.getDay());

// I should use explicit coercion so that my intention is clear

console.log("Today's day is " + String(today.getDay()));

var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

console.log("Today's day is " + daysOfWeek[today.getDay()]);

// only use coercion when it's not a string already. In this case we used
// the index to fetch a String from an array

console.log("Today's day is " + daysOfWeek[today.getDay()] + ', the ' + String(today.getDate()) + 'th');

// function dateSuffix(dateNum) {
// 	var suffix = '';

// 	switch (true) {
// 		case (dateNum % 10 === 1 && dateNum !== 11):
// 			suffix = 'st';
// 			break;
// 		case (dateNum % 10 === 2 && dateNum !== 12):
// 			suffix = 'nd';
// 			break;
// 		case (dateNum % 10 === 3 && dateNum !== 13):
// 			suffix = 'rd';
// 			break;
// 		default:
// 			suffix = 'th';
// 	}

// 	return suffix;
// }

// console.log("Today's day is " + daysOfWeek[today.getDay()] + ', the ' + String(today.getDate()) + dateSuffix(today.getDate()));

// They converted the number to a string and examined the last digit. I was thinking that but then realized that you could divide 
// by 10 and look at the remainder in order to determine the last digit of the number. Will try their solution as well.

// function dateSuffix(dateNum) {
// 	var suffix = 'th';
// 	var stringDate = String(dateNum);
// 	var lastDigit = stringDate.slice(-1);

// 	if (lastDigit === '1' && dateNum !== 11) {
// 		suffix = 'st';
// 	} else if (lastDigit === '2' && dateNum !== 12) {
// 		suffix = 'nd';
// 	} else if (lastDigit === '3' && dateNum !== 13) {
// 		suffix = 'rd';
// 	}

// 	return suffix;
// }

// Their solution:

function dateSuffix(date) {
	var suffix = 'th';
	var dateString = String(date);
	var digit;

	if (dateString.length === 1) {
		digit = dateString[0];
	} else if (dateString[0] !== '1') {
		digit = dateString[1];
	}

	if (digit === '1') {
		suffix = 'st';
	} else if (digit === '2') {
		suffix = 'nd';
	} else if (digit === '3') {
		suffix = 'rd';
	}

	return String(date) + suffix;
}

console.log("Today's day is " + daysOfWeek[today.getDay()] + ', the ' + dateSuffix(today.getDate()));

// Their code is clever checks to see if the first digit is '1', where the rules don't apply.
// (everything ends witha 'th'). if it is then digit won't be assigned a value and will pass
// through the comparison if statement that would assign a suffix. This would keep the original
// suffix shown above. It also avoids having to check if a value is 11, 12 or 13 with every 
// statement which is much more efficient. 

console.log("Today's day is " + daysOfWeek[today.getDay()] + ', ' + 
																String(today.getMonth()) + ' ' + 
																dateSuffix(today.getDate()));

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

console.log("Today's day is " + daysOfWeek[today.getDay()] + ', ' + 
																months[today.getMonth()] + ' ' + 
																dateSuffix(today.getDate()));