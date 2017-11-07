function fridayThe13ths(year) {
	var date;
	var fridayThe13thsCount = 0;
	for (var i = 0; i < 12; i += 1) {
		date = new Date(year, i, 13);
		if (date.getDay() === 5) {
			fridayThe13thsCount += 1;
		}
	}

	return fridayThe13thsCount;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2

/*

input: year
output: number of friday the 13ths in that year

definitions:
- day of week === friday AND day of month === 13th
- year is > 1752

rules

check each 13th day of each month. If it's a friday (5th day of the week),
increment the count of fridayThe13ths.

return fridayThe13ths

for (var i = 0; i < 12; i += 1)
- new Date(year, i, 13)
if date.getDay === '5'

fridayThe13thCount += 1;

test cases:

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

algorithm:

initialize a count of fridayThe13ths to 0
for the 13th day of each month of the year:
	-if day === '5' (friday)
		- increment fridayThe13ths

return fridayThe13ths

*/
