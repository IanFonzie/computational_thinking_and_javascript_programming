var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  bands.map(function(band) {
	  updateCountry(band);
	  capitalizeBandName(band);
	  removeDotsInBandName(band);
	  return band;
	});

	function updateCountry(band) {
	  band.country = 'Canada';
	}

	function capitalizeBandName(band) {
	  var nameArray = band.name.split(' ');
	  var capitalized = nameArray.map(function(word) {
	  	return capitalize(word);
	  }).join(' ');
	  band.name = capitalized;
	}

	function capitalize(word) {
		return word[0].toUpperCase() + word.slice(1);
	}

	function removeDotsInBandName(band) {
	  //
	}
}

processBands(bands);

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
