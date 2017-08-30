// function gcd(value1, value2) {
// 	if (value2 === 0) {
// 		return value1;
// 	} else {
// 		var remainder = value1 % value2;
// 		return gcd(value2, remainder);
// 	}
// }

// I used recursion because the solution in wikipedia seemed to suggest that's how it worked.
// Their solution loops until num2 === 0 (similar to recursion) and sets a placeholde variable
// temp that stores number2. They then calculate the remainder of the first number divided by 
// the second number and set the first number2 to the temporary variable which has been 
// set to the second number (num2). Basically, storing the second value to use in the first
// position in subsequent calls and setting the remainder to be the second value

// function gcd(num1, num2) {
// 	while (num2 !== 0) {
// 		var temp = num2;
// 		num2 = num1 % num2;
// 		num1 = temp;
// 	}

// 	return num1;
// }

// This will work with the smaller number first because the largest number does
// not go into the smallest number at all. the result is that in the next iteration
// the num2 will become the first number and the second number will be the remainder
// of the first operation which is the same as the samller number.

// perform the original operation with the first two members of the array.
// strip the second number in the array if it's equal to 0 and there are 
// more than two members left because GCD is associative and we already have 
// the result in the first member. break the loop if the number in the second
// position is 0 and there are only two memebers left

function gcd(nums) {
	while (nums[1] !== 0 && nums.length >= 2) {
		var temp = nums[1];
		nums[1] = nums[0] % nums[1];
		nums[0] = temp;
		if (nums[1] === 0 && nums.length === 2) {
			break;
		} else if (nums[1] === 0) {
			nums.splice(1, 1);
		}
	}

	return nums[0];
}

// because num1 and num2 are arguments here, they are automatically
// scoped to the function and we can't access them outside of scope.

// blocks do not appear to affect scopes but functions do