function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

processOrder(100);      // 126.5

// OR

function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;
  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

// In both of these solutions, we have a problem with falsy values being used in the conditional statements. This
// is a problem of note with any of these parameters, but is most apparent with the serviceCharge and tax values, since
// we are unlikely to use a 0 for our quantity. However with the serviceCharge and tax parameters if we pass the 
// processOrder function values of 0, it will use the defaults instead because these are considered by JavaScript to be
// falsy.

// Explanation:

// The solutions lead to problems when one of the inputs is 0. For example:

processorder(100, 2, 0.1, 0, 0);

// This happened because 0 is falsy in JavaScript and therefore the value gets re-assigned. To work around this, it's better
// to explicitly test whether the input areguments are undefined, instead of relying on them being falsy.