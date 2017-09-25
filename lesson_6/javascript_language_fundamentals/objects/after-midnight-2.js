var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
var DATE = new Date('1/1/2000 00:00');
var MILLISECONDS_PER_DAY = 86400000;
var DATE_PART = '1/1/2000';

// My Solution:

// function afterMidnight(timeStr) {
//   var deltaDate = new Date('1/1/2000 ' + timeStr);
//   var difference = deltaDate.getTime() - DATE.getTime();

//   return difference / 60 / 1000;
// }

// // Still works but for the sake of using the Date object, I'll rewrite:

// // function beforeMidnight(timeStr) {
// //   var deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
// //   if (deltaMinutes === MINUTES_PER_DAY) {
// //     deltaMinutes = 0;
// //   }
// //   return deltaMinutes;
// // }

// function beforeMidnight(timeStr) {
//   var deltaDate = new Date('12/31/1999 ' + timeStr);
//   var difference = DATE.getTime() - deltaDate.getTime();
//   if (difference === MILLISECONDS_PER_DAY) {
//   	difference = 0;
//   }

//   return difference / 60 / 1000;
// }

// Their Solution:

function afterMidnight(timeStr) {
	var midnight = new Date(DATE_PART + ' 00:00');
	var currentDateTime = new Date(DATE_PART + ' ' + timeStr);

	return (currentDateTime.getTime() - midnight.getTime()) / 60000;
}

function beforeMidnight(timeStr) {
  var deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}


// Very similar solutions here. I noticed that you could reuse the beforeMidnight function as-is, but
// still decided to try a rewrite because the problem statement wasn't very specific. I created a 
// DATE constant because I thought I would be reusing it in both the before and afterMidnight methods,
// turned out it was only necessary in afterMidnight so this can be moved to that method. They did create
// a DATE_PART constant that seemed to be useful increating the midnight and currentDateTime objects.

// Explanation:

// The only function that changes is the afterMidnight function since the beforeMidnight function only uses
// afterMidnight. In the afterMidnight function, the approach involves using the return value of the 
// Date.prototype.getTime() method for the midnight variable and the timeStr argument. The solution subtracts 
// the value of the midnight date variable from the currentDateTime variable that uses the timeStr argument.
// The result of this will be a delta time value that is in milliseconds. It then divides the result by 60000
// to convert it to minutes and eventually returns it.

afterMidnight('00:00');        // 0
beforeMidnight('00:00');       // 0
afterMidnight('12:34');        // 754
beforeMidnight('12:34');       // 686