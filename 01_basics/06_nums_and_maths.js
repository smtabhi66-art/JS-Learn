const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966

// console.log((otherNumber.toPrecision(4)));

// +++++++++++++++++++++++ Maths +++++++++++++++++++++++ //

console.log(Math);
console.log(Math.abs(-4));

console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(3,4,5,6,7));
console.log(Math.max(3,4,5,6,7));

console.log(Math.random());// values between 0 and 1
console.log((Math.random()*10) + 1);

const min = 10
const max = 30

console.log(Math.floor(Math.random()*(max - min + 1)) + 10);

// above applying simple maths to avoid like getting random value between 0 and 1 
// and some maths function available in js 