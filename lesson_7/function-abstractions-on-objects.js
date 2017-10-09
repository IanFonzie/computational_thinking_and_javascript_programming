// map to a new object with values doubled from myObject
function doubleObjectValues(object) {
  var newObject = {};
  Object.keys(object).forEach(function(key) {
    newObject[key] = object[key] * 2;       // side effect
  });
  return newObject;
};

doubleObjectValues({a: 1, b: 2, c: 3});         // {a: 2, b: 4, c: 6}

// filter an object to only select values with even numbers
function keepEvenValues(object) {
  var newObject = {};
  Object.keys(object).forEach(function(key) {
    if(object[key] % 2 === 0) {
      newObject[key] = object[key];        // side effect
    }
  });

  return newObject;
};

keepEvenValues({a: 1, b: 2, c: 3});         // {b: 2}

// reduce an invoice object
function getTotalFromInvoice(invoice) {
  var total = {total: 0};
  Object.keys(invoice).forEach(function(key) {
    total.total += invoice[key];          // side effect
  });

  return total;
};

getTotalFromInvoice({phone: 10000, internet: 8000, tax: 3000});  // {total:  21000}