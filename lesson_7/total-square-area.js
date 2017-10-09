var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalArea(rectangles) {
	var totals = rectangles.map(function(rectangle) {
		return rectangle[0] * rectangle[1];
	});

	return totals.reduce(function(sum, value) {
		return sum + value;
	});

	// return totalArea;
}

totalArea(rectangles); // 141

// For each set of rectangles, determine the squareArea. Map Transformation is best for this.
// sum all of the areas to determine the total. Reduce Reduction abstraction is best for this.
// nearly an identical solutioon, variable names weren't the best. Probably should've gone with
// something similar to what they used which was areas to determine the areas from the rectangles 
// and area in the reduction.

// Second function is nearly identical except we filter out any values that are not squares. Use the
// filter abstraction for this.

function totalSquareArea(rectangles) {
	var squares = rectangles.filter(function(rectangle) {
		return rectangle[0] === rectangle[1];
	})

	return totalArea(squares);
}

totalSquareArea(rectangles);