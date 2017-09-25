var myArray = ['a', 'b', 'c'];
// logs 'a'
console.log(myArray[0]);
// logs undefined
console.log(myArray[-1]);
// Invalid Index
myArray[-1] = 'd';
// Indvalid Index
myArray['e'] = 5;
myArray[3] = 'f';

// logs 'd'
console.log(myArray[-1]);
// logs 5
console.log(myArray['e']);
// logs ['a', 'b', 'c', 'f', -1: 'd', e: 5]
// Indexes are added first and then invalid keys are printed in the order
// in which they're added.
console.log(myArray);

// Explanation: Arrays are JavaScript Objects. I fyou think about it from that perspective,
// then it would make sense that using a -1 as an index does not return the last value of
// the array but instead returns undefined; which is the expected result of accessing the
// key of an object that is not defined or does not exist. i fyou take a look at the array
// you can see that for any o fthe values that don't have a key value of a positive integer
// (including zero) the key is also included when the array is logged.