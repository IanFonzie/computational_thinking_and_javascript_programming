// include <script src="http://dbdwvr6p7sskw.cloudfront.net/210/files/email_data_v2.js"></script>
// in the template

function mailCount(emailData) {
	var emailChain = emailData.split(/##\|\|##/).map(constructMailChain);
	var dates = emailChain.map(function(email) {
		return new Date(email.date.match(/\d{2}-\d{2}-\d{4}/)[0]);
	});

	dates.sort(chronologicalSort);

	logCounts(emailChain, dates);
}

function constructMailChain(email) { 
	var properties = email.split(/#\/#/)
	return {
		sender: properties[0].trim(),
		subject: properties[1].trim(),
		date: properties[2].trim(),
		recipient: properties[3].trim(),
		body: properties[4].trim(),
	};
}

// Could have just done (date1 - date2)
function chronologicalSort(date1, date2) {
	if (date1 > date2) {
		return 1;
	} else if (date1 < date2) {
		return -1;
	} else  {
		return 0;
	}	
}

function logCounts(emails, sortedDates) {
	var earliest = sortedDates[0].toDateString();
	var latest = sortedDates[sortedDates.length - 1].toDateString();
	console.log('Count of Email: ' + emails.length);
	console.log('Date Range: ' + earliest + ' - ' + latest);
}

mailCount(emailData);

    // console output
// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016

// Abstractions, split the string by (##| |##) to get all of the emails.
// to determine the email count we simply use the length of that email array.
// to get dates we take the date of the first email (emails[0][2]) and the 
// date of the last email (emails[emails.length - 1][2])

// Their Abstractions:

// Start by breaking the text into an array of email messages using the ##||## delimiter. 
// break ecah email into its five parts using the #/# delimiter then store the data in an emails object that uses each
// part as a property. You can now perform some list processing to determine the oldest and most recent dates.

// The email message count is easy to get: it's the length of the message array. Determining the date range might be 
// more difficult. Sort the date values from lowest to higher; the first and last values of the sorted dates provide
// the date range.

// WE can convert each string date to a Date object and then sort the Date objects. To convert the strigns to dates, you
// need to parse the string somehow. Our emaiil messages contain dates in this format: 07-12-2016. We need to extract the
// month, day and year from this string and then use them to build a date object.

// Their solution:

// function mailCount(emailDate) {
// 	var emails = emailData.split('##||##');
// 	var count = emails.length;
// 	var emailDates = emails.map(function(email) {
// 		return email.split('#/#')[2];
// 	});

// 	console.log('Count of Email: ' + count);
// 	console.log('Date Range: ' + displayableDateRange(emailDates));
// }

// function displayableDateRange(dates) {
// 	var dateObjects = getDateObjects(dates);
	
// 	dateObjects.sort(function(a, b) {
// 		return a.valueOf() - b.valueOf();
// 	});
	
// 	return dateObjects[0].toDateString() + ' - ' + dateObjects[dateObjects.length - 1].toDateString();
// }

// function getDateObjects(dates) {
// 	return dates.map(function(date) {
// 		var dateElements = date.split(' ')[1].split('-');
// 		var month = parseInt(dateElements[0]) - 1;
// 		var day = parseInt(dateElements[1]);
// 		var year = parseInt(dateElements[2]);
// 		return new Date(year, month, day);
// 	});
// }

// Notes / differences:
// The abstractions portion of this exercise seemed to imply I should build an object of emails whereas they just built
// an array of dates, I would have done that if the problem statement was a bit clearer.
// They stored the count in the mailCount function whereas I determined it in the logCounts function. Not sure which solution
// is better.
// emailDates were quite different. I constructed a new date using a regex to extract the numerical portion of the date string
// that had been extracted and saved as the property of an email. This let me build an array of Dates right away.
// They built a string of dates by mapping over each email and building an array consisting of string dates.

// Logging the counts is straightforward, but they chose to create a function for displayableDateRange that would format the
// final log statement.

// in order to do this, they took the dates array and mapped each one by splitting the 'Date:' form the '\d\d-\d\d-\d\d\d\d'.
// They then split the numbered date format again this time using the '-' and proceded to parse the int date values from there.
// to get the month they parsed the dateElement and subtracted one because of how months are indexed.  The parsed the day by
// getting the second date element in the array and finally the year by parsing the third. After all the components had been
// parsed they constructed a new Date object using these values are mapped them to an array.

// finally these date objects were sorted chronologically, if the first dateValue was larger than the second (a - b was positive),
// it would come after the b in the sort. if it was smaller than the second then it would appear before it (a - b was negative). 
// if the two matched then their order was not important. 


// finally the first and last element sof the object were converted to date strings and the entire string was returned to the
// original mail counts function.