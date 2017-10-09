function myFilter(array, func) {
	var newArray = [];

  array.forEach(function(value) {
  	if (func(value)) {
  		newArray.push(value);
  	}
  });

  return newArray;
}

var isPythagoreanTriple = function(triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

myFilter([{a: 3, b: 4, c: 5}, {a: 5, b: 12, c: 13},
          {a: 1, b: 2, c: 3}], isPythagoreanTriple);
// returns [{a: 3, b: 4, c: 5}, {a: 5, b: 12, c: 13}]
