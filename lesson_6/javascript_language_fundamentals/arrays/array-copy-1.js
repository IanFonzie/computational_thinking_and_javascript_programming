var myArray = [1, 2, 3, 4];
var myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// At line 5 this will log [1, 2, 3] because myOtherArray is assigned a reference to myArray that we have
// mutated using the pop() function. Since they are both pointing to the same object this change will be
// reflected in myOtherArray.

// At line 8 this will log [1, 2, 3] because myArray is now pointing to a new object while myOtherArray is
// still pointing to the original myArray object. Since myOtherArray is not aware of what the new object
// is pointing at, it will remain the same.

// Explanation: The value logged or myOtherArray at line 5 is the same as that of the value of myArray. This
// is because the value stored with the variable myArray is a reference to the location of the values and not
// the values itself. As such, when the program pops a value from myArray, myOtherARray mirrors the change.

// For line 8, the value of myOtherArray did not change because the value of the reference stored in line 7 is
// different. Performing a reassignment operation changes the value of the reference stored. As a result of line 7,
// myArray and myOhterArray now have different (reference) values stored and the change becoems local to myArray
// only.