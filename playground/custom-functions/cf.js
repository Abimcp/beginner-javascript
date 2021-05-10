// Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the function body
  console.log('Running Calculate Bill!!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// Function Call. Or *Run* of the function
// const myTotal = calculateBill(100, 0.13);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}
// const greeting = sayHiTo('Abi');
// console.log(greeting);

function doctorise(name) {
  return `Dr. ${name}`;
}
function yell(name = '') {
  return `HEY ${name.toUpperCase()}`;
}
