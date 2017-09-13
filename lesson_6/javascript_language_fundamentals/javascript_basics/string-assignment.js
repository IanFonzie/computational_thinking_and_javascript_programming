// The following code will log 'Alice, Bob' because Strings are immutable.

var name = 'Bob';
var saveName = name;
name = 'Alice';
console.log(name, saveName);

// we are workin directly with the values and not with a reference to the name
// 'Bob', therefore the 'Bob' assigned to saveName is distinct from the one that
// was initially assigned to name.

// The following code will log 'Bob, Bob', again because strings are immutable. if 
// we had reassigned name = name.toUpperCase(); then the result would print out 'BOB, Bob'
// but since we aren't doing anything with the return values, the variables will remain
// as is.

var name = 'Bob';
var saveName = name;
name.toUpperCase();
console.log(name, saveName);

// Strings are primitive and not mutable. 

// Further Exploration: Strings may be primitive but they are able to be coerced into objects.
// when we call their methods or properties. The object will be used for a fraction of a second
// before it is disposed of by garbage collection. Likewise objects can also be coerced into 
// primitives when their values are required.