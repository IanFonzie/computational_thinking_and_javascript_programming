// function productOfSums(array1, array2) {
//   var result;
//   result = total(array1) * total(array2);
//   return result;
// }

// function total(numbers) {
//   var sum;
//   for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   sum;
// }

// The total function will not return the expected result because we are trying to add a number
// and an undefined variable together which results in NaN. This will propagate up to the productOfSums
// method because any arithmetic operations involving NaN will always return NaN. In addition to this
// we are not actually returning a value in the total() method which will cause the function to return
// undefined and again cause a bug when calculating the return values used in productOfSums.

// If we initialize sum to 0, this should solve the problem and allow the productOfSums method to
// return the correct result.

function productOfSums(array1, array2) {
  var result;
  result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

// Explanation:

// There are two things that are problematic with this code. The first is that the total function does not
// have an explicit return value, therefore it returns undefined. Since it is undefined the product of 
// total(array1) * total(array2) becomes undefined * undefined, which evaluates to NaN. The second issue is
// that the sum variable in the total function is not assigned with a value and is therefore undefined. With
// this, the value of sum in the loop after every iteration is NaN because undefined + numbers[i] is NaN.

// Here is the correct function:

// function total(numbers) {
// 	var sum = 0;
// 	for (var i = 0; i < numbers.length; i++) {
// 		sum += numbers[i];
// 	}

// 	return sum;
// }
