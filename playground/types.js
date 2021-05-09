/* eslint-disable */

const name = 'Abi';
const middle = "Murron";
const last = `Peck`;

const sentence = "she's so cool";

const sentence2 = `she's so "cool"`




const hello = `hello my name is ${name}. Nice to meet you. I am ${1 + 100} years old`;
const html = `
    <div>
     <h2> ${name}</h2>
     <p>${hello}</p>
     </div> 
`

const hello =  "hello my name is " + name + ". Nice to meet you ";


document.body.innerHTML = html;
console.log(html);

const age = 100.5;

const a = 10;
const b = 20;
 const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties / kids);
const dadGets = smarties % kids;
console.log(`Each kid gets ${eachKidGets}`);


const person = {
    first: 'Abi',
    last: 'Peck',
    age: 23,
};


let dog;
dog = 'clifford';
console.log(dog);
const somethingUndefined;
const somethingNull = null;

let isDrawing = false;

let age = 18;
const ofAge = age > 19;
console.log(ofAge);
age = 100;
