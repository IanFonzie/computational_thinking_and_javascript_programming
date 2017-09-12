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

console.log("Today's date is " + daysOfWeek[today.getDay()] + ', ' + 
																months[today.getMonth()] + ' ' + 
																dateSuffix(today.getDate()));

function formattedMonth(date) {
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	return months[date.getMonth()];
}

function formattedDay(date) {
	var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	return daysOfWeek[date.getDay()];
}

// function formattedDate(date) {
// 	console.log("Today's date is " + formattedDay(date) + ', ' +
// 																	 formattedMonth(date) + ' ' +
// 																	 dateSuffix(today.getDate())
// 		);
// }

function formattedDate(date) {
	var day = formattedDay(date);
	var month = formattedMonth(date);

	console.log("Today's date is " + day + ', ' + month + ' ' + dateSuffix(date.getDate()));
}

// I didn't store the day and month values in variables. essentially the same solution.

console.log(today.getFullYear());
console.log(today.getYear());

console.log(today.getTime());

// var tomorrow = new Date(today.getTime());
// tomorrow.setDate(12);
// formattedDate(tomorrow);

// I set mine literally to the next date which was the 12th. should be:

var tomorrow = new Date(today.getTime()); // time in milliseconds
tomorrow.setDate(today.getDate() + 1); // gets the current date and adds 1 to it.
formattedDate(tomorrow);

// four ways to create a date:

// 1. new Date();
// 2. new Date(value);
// 3. new Date(dateString);
// 4. new Date(year, month[, date[, hours[, minutes, [seconds,[ milliseconds]]]]]);

// Passing in the dte object also works (e.g. new Date(today) ). However, this employs
// implicit coercion which is not recommended. Using the Date.prototype.getTime()
// method makes it clear what's going on. (I'm assuming that the date object is coerced
// into a string).

var nextWeek = new Date(today.getTime());
console.log(today === nextWeek);

// They are not equal, assuming this works like an array it's checking if its the same 
// object and not that they contain the same properties / elements. They are different
// objects and therefore are not equal.

console.log(today.toDateString() === nextWeek.toDateString());

nextWeek.setDate(today.getDate() + 7);
console.log(today.toDateString() === nextWeek.toDateString());

// function formatTime(date) {
// 	var hours = String(date.getHours());
// 	var minutes = String(date.getMinutes());

// 	if (hours.length < 2) {
// 		hours = '0' + hours;
// 	}

// 	if (minutes.length < 2) {
// 		minutes = '0' + minutes;
// 	}

// 	return (hours + ':' + minutes);
// }

// They created a separate function which DRYs up the code. rewrite:

// function addZero(string) {
// 	return string.length < 2 ? '0' + string : string;
// }

// function formatTime(date) {
// 	var hours = String(date.getHours());
// 	var minutes = String(date.getMinutes());

// 	hours = addZero(hours);
// 	minutes = addZeros(minutes);

// 	return hours + ':' + minutes;
// }

// Their solution:

function formatTime(date) {
	return addZero(date.getHours()) + ':' + addZero(date.getMinutes());
}

function addZero(val) {
	var timeComponent = String(val);
	return timeComponent.length < 2 ? '0' + timeComponent : timeComponent;
}

// They moved coercion into the addZero function and then used the same logic that I did.
// this will take the value extracted fromt he date when the function is called in formatTime
// If the number length is smaller than 2 aka less than two digits then it will append a 0 to the
// string value. other wise it will simply return the string value. I could have done something
// similar by calling my addZero function in the formatTime function though I didn't think to move
// the coercion into the addZero function.