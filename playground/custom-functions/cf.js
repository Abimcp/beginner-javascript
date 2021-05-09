// Function Definition
function calculateBill() {
  // this is the function body
  console.log('Running Calculate Bill!!');
  const total = 100 * 1.13;
  console.log(total);
  return total;
}

// Function Call. Or *Run* of the function
const myTotal = calculateBill();
// console.log(`Your Total is $${myTotal}`)

console.log(`your total is $${calculateBill()}`);
