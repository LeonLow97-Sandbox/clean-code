// Function with spread operator
function sumUp(...numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

// easy to read and understand
const total = sumUp(10, 19, -3, 22, 5, 100);

// Alternative solution
// take in an array (one argument) but don't really need to do this
// const total = sumUp([10, 19, -3, 22, 5, 100]);
