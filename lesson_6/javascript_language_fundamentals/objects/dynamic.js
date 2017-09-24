var myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

var prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]);
console.log(myObject.prop2);

// a variable prop2 is declared whose value is equal to '456'.
// Then myObject['prop2'] is set to '456' as well. Finally,
// myObject[prop2] is set to equal '678'. This is equivalent
// to myObject[456] = 678.

// Therefore on line 11 logs '678' and line 12 logs '456'.

// The tricky part here are the names of the properties, the variable name,
// and of course the fact that you can use an expression to create and access 
// properties. The difference of line 11 to line12, while they may look the same, 
// is that in line 11 it's the value of prop used as the key ('456'). This did not
// return undefined because ti was also added as a property on line 9 where it got
// assigned a value of '678'. Line 12's value is different from the original
// assignment in the object literal at line 3 because of the reassignment at line 8.

// Further exploration:

var myObj = {};
myObj[myFunc()] = 'hello, ';
function myFunc() {
  return 'funcProp';
}

console.log(myObj);
myObj[myFunc()] = 'world!';
console.log(myObj);

// functions get hoisted, like 2 will use the value of the function to add a property to the object
// aka { funcProp: 'hell0, ' }. This will then be logged at line 7. line 8 will reassign the funcProp
// property to be equal to 'world!' and line 9 will log { funcProp: 'world!' };
