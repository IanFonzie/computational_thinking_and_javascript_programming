var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

// function processBands(data) {
//   bands.map(function(band) {
// 	  updateCountry(band);
// 	  capitalizeBandName(band);
// 	  removeDotsInBandName(band);
// 	  return band;
// 	});

// 	function updateCountry(band) {
// 	  band.country = 'Canada';
// 	}

// 	function capitalizeBandName(band) {
// 	  var nameArray = band.name.split(' ');
// 	  var capitalized = nameArray.map(function(word) {
// 	  	return capitalize(word);
// 	  }).join(' ');

// 	  band.name = capitalized;
// 	}

// 	function capitalize(word) {
// 		return word[0].toUpperCase() + word.slice(1);
// 	}

// 	function removeDotsInBandName(band) {
// 	  band.name = band.name.replace(/\./g, '');
// 	}
// }

// processBands(bands);

// should return:

[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]

// Seems like mapping with a few steps
// these steps should use abstractions, methods that I create to:
// changeToCanada(band), capitalize(band), removeDots(band)

// Since we have an Array of Ojbects and expect an Array result with the same number of Objects, a map operation seems
// appropriate:

// we must perform three tasks to transform the data for each band:

// update the country.
// Capitalize the band name.
// Remove the dots from the band name.

// Use the side effects of the three functions to mutate the argument, then return the Array as the transformation's result. 

// our solution works, but every step along the way produces side effects. Specifically, this process mutates the original
// bands Array, and each of the transformative functions works  on different content. If you no longer need the original
// bands data, this may be OK, but it can cause problems if you don't expect the mutation. Generally, you should aim to
// reduce side effects in your functions; this contains the effects on the rest of you program.

// A version free from side effects might look like this:

function processBands(bands) {
	return bands.map(function(band) {
		var capitalizedName = capitalizePhrase(band.name);
		var newBandName = removeDotsInString(capitalizedName);

		return {
			name: newBandName,
			country: 'Canada',
			active: band.active,
		};
	});
}

function capitalizePhrase(phrase) {
	var capitalizedPhrase = phrase.split(' ').map(function(word) {
		return capitalizeString(word);
	}).join(' ');
	return capitalizedPhrase;
}

function capitalizeString(string) {
	var initial = string[0].toUpperCase();
	var rest = string.slice(1, string.length);
	return initial + rest;
}

function removeDotsInString(string) {
	return string.replace(/\./g, '');
}

// solution is better as an abstraction - the econcept of a band doesn't leak into capitalizePhrase 
// and removeDotsInString functions. Instead it merely performs string operations, and doesn't care
// what its arguments represent.