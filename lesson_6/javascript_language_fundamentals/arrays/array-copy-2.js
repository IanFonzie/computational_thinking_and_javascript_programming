var myArray = [1, 2, 3, 4];
// var myOtherArray = myArray.slice();
var myOtherArray = [];

for (var i = 0; i < myArray.length; i += 1) {
	myOtherArray.push(myArray[i]);
}

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// I had nearly the exact same solution exccept that I set the literal index of myOtherArray 
// equal to the value of myArray at the same index.

// Explanation:

// First alternative makes use of a loop to iterate over the array to get the values at the 
// respective indices and pushes this value to myOtherArray. The second, and more concise, 
// alternative is to leverage the Array.prototype.slice() method that returns a new array 
// object and consequently a new reference value.