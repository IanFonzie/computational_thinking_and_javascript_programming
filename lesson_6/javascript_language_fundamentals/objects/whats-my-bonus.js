function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

calculateBonus(2800, true)      // 1400
calculateBonus(1000, false)     // 0
calculateBonus(50000, true)     // 25000

// This code works because it uses the argument object to provide the values for both the
// boolean switch and salary amounts passed into the function as arguments.

// Explanation: Notice that while no parameters are explicitly defined for the calculateBonus
// function there are still arguments that are available locally within the function. This is
// because all functions have an arguments object that is available locally. The arguments object
// contains an entryu for every argument passed to the function.