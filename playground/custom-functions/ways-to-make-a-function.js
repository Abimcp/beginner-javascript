function doctorize(firstName) {
return `Dr ${firstName}`;
 }

 // anonymous function, function without a name
 function (firstName) {
 return `Dr.  ${firstName}`;
 }

function expression;
 const doctorize = function doctorize(firstName) {
  return `Dr ${firstName}`;
};

arrow function
function inchToCM(inches) {
return inches * 2.54;
}

const inchToCm = (inches) => inches * 2.54;

function add(a, b = 3) {
const total = a + b;
return total
}
 // an object

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE immediately invoked function expression

(function (age) {
  return `You are cool and age ${age}`;
})(10);



function handleClick() {
  console.log('Great Clicking!!');
}
button.addEventListener('click', function () {
  console.log('Nice Job!!!!');
});

// Timer Callback
setTimeout(function () {
  console.log('Done! Time to Eat!');
}, 1000);
