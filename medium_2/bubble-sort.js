function bubbleSort(array) {
	var swapped;
	do {
		swapped = false;
		for (var i = 0; i < array.length - 1; i += 1) {
			if (array[i] > array[i + 1]) {
				swap(array, i);
				swapped = true;
			}
		}
	} while (swapped === true);

	return array;
}

function swap(array, i) {
	var temp = array[i];
	array[i] = array[i + 1];
	array[i + 1] = temp;
}

var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

/*

input: an array
output: the same array, sorted

do
rules start with a swap flag set to false
	for i = 0 to the 2nd last element:
		if array[i] > array[i + 1]
			swap(array[i], array[i + 1])
			swap = true
while swap === true
return the array

*/
