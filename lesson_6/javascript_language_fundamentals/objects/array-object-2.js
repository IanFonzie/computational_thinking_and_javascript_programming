var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;
// function average(array) {
//   var sum = 0;
//   for (var i = -2; i < array.length; i++) {
//     sum += array[i];
//   }

//   return sum / array.length;
// }

average(myArray);

// myArray[-1] & myArray[-2] are not valid indexes/elements in the array and therefore do not
// count towards its length property. Since this function is still able to access elements at 
// the invalid keys, it will add 5 to the sum four times, however, it will only be able to 
// divide the result by two because there are only two valid indexes that count towards the length
// property ([5, 5]). Since the sum is dividing by two less than the number of elements being used
// in the calculation, the average will be higher than expected at 10.

// Explanation: A non-positive integer is not considered as part of an array's length. As such the
// length is only 2 when the sum of the elements were divided (20 / 2)

// Rewrite:

function average(array) {
  var sum = 0;
  var length = Object.keys(array).length;
  var start = -2;
  for (var i = start; i < start + length; i++) {
    sum += array[i];
  }

  return sum / length;
}