var newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'id': 0,
    'title': 'Fart',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

function processReleaseData(data) {
  return data.filter(function(release){
    // return release.id && release.title;
    return Object.keys(release).indexOf('id') !== -1 && Object.keys(release).indexOf('title') !== -1;
  }).map(function(release) {
    // var info = {};
    // info.id = release.id;
    // info.title = release.title;
    // return info;
    return {
      id: release.id,
      title: release.title,
    }
  });
}

// Had the right idea, forgot hwo to return an object literal in JS.

processReleaseData(newReleases);

// should return:
[{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];

// With the current logic, if the id were to have a value of 0 the release would not be selected because
// 0 is a falsy value in JavaScript and would therefore not satisfy the condition in the callback function.
// In order to handle the 0 value, we would simply need to modify the filter callback function to check that 
// the keys of the object include both the id and title, like so: