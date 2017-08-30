var x = '13';
var y = 9;

console.log(Number(x) + y);

// They used console.log(parseInt(x, 10) + y);

// 2. The result will be a number because the arithmetic operators are only defined for numbers 
// and will therefore be coerced into a number

var npa = 212;
var nxx = 555;
var num = 1212;

console.log(String(npa) + String(nxx) + String(num));

// Could have also performed this after the declarations and before logging the solution,
// like they did.

// they chose to use the non-recommended approach of adding numbers to empty strings

// npa = '' + npa;
// nxx = nxx + '';
// num += '';

// console.log(npa + nxx + num); // 2125551212

// 4. Basically the answer that I had at first: 
// console.log(String(npa) + String(nxx) + String(num));

var bool = true;
var arr = [1, 2, 3];

console.log(bool.toString());
console.log(arr.toString());

// Strings were returned instead of the original data type