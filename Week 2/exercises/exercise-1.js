// Exercise 1

// Exercise 2

// Exercise 3
function calculatePower() {
  const base = parseFloat(prompt("Enter the base:"));
  const exponent = parseFloat(prompt("Enter the exponent:"));

  // Validate inputs
  if (isNaN(base) || isNaN(exponent)) {
    console.error("Invalid input. Please enter numeric values.");
    return;
  }

  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  console.log(`${base} raised to the power of ${exponent} is ${result}`);
}

calculatePower();

// Exercise 4
