var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function timeOfDay(deltaMinutes) {
//   var hours;
//   var minutes;

//   // Determines the number of minutes left if deltaMinutes > MINUTES_PER_DAY
//   deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
//   if (deltaMinutes < 0) {
//     // If MINUTES_PER_DAY is negative, add (subtract the value from MINUTES PER DAY)
//     deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
//   }

//   // Trims Hours from the entire date. (can use getHours())
//   hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
//   // Trims Minutes from the entire date (can use getMinutes())
//   minutes = deltaMinutes % MINUTES_PER_HOUR;

//   // This might be unnecessary
//   return padWithZeroes(hours, 2) + ':' + padWithZeroes(minutes, 2);

//   // Need to get a constant date
//   // Need to compare teh time in milliseconds to this date, whether it's over or under
// }

// My Solution:

// function timeOfDay(deltaMinutes) {
//   var hours;
//   var minutes;
//   var milliseconds = deltaMinutes * 60 * 1000;
//   var referenceDate = new Date(2000, 0);

//   var deltaDate = new Date(referenceDate.getTime() + milliseconds);

//   hours = deltaDate.getHours();
//   minutes = deltaDate.getMinutes();

//   return padWithZeroes(hours, 2) + ':' + padWithZeroes(minutes, 2);
// }

// Their Solution:

var MILLISECONDS_PER_MINUTE = 60000;

function timeOfDay(deltaMinutes) {
  var midnight = new Date('1/1/2000 00:00');
  var afterMidnight = new Date(midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE);
  var hours = padWithZeroes(afterMidnight.getHours(), 2);
  var minutes = padWithZeroes(afterMidnight.getMinutes(), 2);

  return hours + ':' + minutes;
}

function padWithZeroes(number, length) {
  var numberString = String(number);

  while (numberString.length < length) {
    numberString = '0' + numberString;
  }

  return numberString;
}

timeOfDay(0);       // "00:00"
timeOfDay(-3);      // "23:57"
timeOfDay(35);      // "00:35"
timeOfDay(-1437);   // "00:03"
timeOfDay(3000);    // "02:00"
timeOfDay(800);     // "13:20"
timeOfDay(-4231);   // "01:29"

// Very similar solutions, they added the reference date into the function, whereas I set
// it to be a constant in the global scope. They then set a constant the number of milliseconds
// in a minute. They then called padWithZeroes, to directly set the hours and minutes before returning
// a formatted string.

// Explanation: Going over the provided function you may notice there are 2 parts that the function is aiming
// to get; (1) The hours component and (2) the minutes component. Without using the Date object's methods
// the function has to handle the sign of the input (negative or positive) and the wrapping around of the 24hr
// clock.

// For this exercise, the solution leverages the Date.prototype.getTime() method. This method returns the value
// of the Date object in milliseconds format. The solution starts off by creating a date object that's set to 
// midnight of any day and stores it in the midnight variable. It then adds the converted value of the minutes
// argument argument to the milliseconds value and adds it to the value returned when midnight calls the getTime()
// method. It then creates a new Date object (afterMidnight) using the sum of the two. The next step is getting
// the hours and minutes value from the afterMidnight variable and padding it with the correct number of leading
// zeroes.