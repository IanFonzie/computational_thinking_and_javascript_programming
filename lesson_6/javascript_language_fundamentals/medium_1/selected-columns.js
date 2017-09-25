// function getSelectedColumns(numbers, cols) {
//   var result = [];
//   for (var i = 0, length = numbers.length; i < length; i++) {
//     for (var j = 0, length = cols.length; j < length; j++) {
//       if (!result[j]) {
//         result[j] = [];
//       }

//       result[j][i] = numbers[i][cols[j]];
//     }
//   }

//   return result;
// }

// function getSelectedColumns(numbers, cols) {
//   var result = [];
//   // setting length here to the length of the number of arrays should be 3 in both these cases.
//   for (var i = 0, length = numbers.length; i < length; i++) {
//     // reassignment length to = cols.length, replacing the value that was previous stored in length
//     for (var j = 0, colLength = cols.length; j < colLength; j++) {
//       if (!result[j]) {
//         result[j] = [];
//       }
    
//       result[j][i] = numbers[i][cols[j]];
//     }
//   }

//   return result;
// }

// My rationale and solution:

// Basically builds up the arrays by checking how many numbers it needs for each array. for each array it
// will take the value at the indexes (j) specified in cols and add them to the current nested array [i] f
// or that column position or build a new nested array if it doesn't already exist. Thought of another way 
// this could be the result for the column j at index i.

// I think the problem is that the length value assigned in the inner loop is getting used again in the outer
// loop which artificially shortens the outer loop, similar to shadowing/reassignment.

// Given array of number arrays
var array1 = [[1, 2, 3], [4, 5 ,6], [7, 8 ,9]];
var array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// array1 in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

getSelectedColumns(array1, [0]);     // [[1]]; expected [[1, 4, 7]]
getSelectedColumns(array1, [0, 2]);  // [[1, 4], [3, 6]]; expected [[1, 4, 7], [3, 6, 9]]
getSelectedColumns(array2, [1, 2]);  // [[2, 2], [3, 4]]; expected [[2, 2, 2], [3, 3, 3]]

// Explanation: I noticed the problem fairly early but spent some time trying to understand the logic of what the program
// was doing.

// The intention for declaring the variable length is to save on the repetitive calls to the .length property. However,
// in the course of declaring the length variable for the second (inner) loop the length variable in the first (outer)
// loop got reassigned. This behavior is caused by the fact that "blocks" don't create their own scope in JavaSCript.
// Even though there was a second variable declaration for length, it doesn't create a new variable. After hoisting the
// two declarations become one and the same effectively making the second a reassignment.

// function getSelectedColumns(numbers, cols) {
//   var result = [];
//   var length;
//   var i;
//   var j;
//   for (i = 0, length = numbers.length; i < length; i++) {
//     for (j = 0, length = cols.length; j < length; j++) {
//       if (!result[j]) {
//         result[j] = [];
//       }

//       // resul arrays for columns in position cols[j]
//       result[j][i] = numbers[i][cols[j]];
//     }
//   }

//   return result;
// }

// in order to resolve the problem we just have to rename any of the length variables (i did this
// for the cols length).

// Possible Solution

function getSelectedColumns(numbers, cols) {
  var result = [];
  for (var i = 0, lengthOuter = numbers.length; i < lengthOuter; i++) {
    for (var j = 0, lengthInner = cols.length; j < lengthInner; j++) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}