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

