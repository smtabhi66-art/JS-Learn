const name = "abhinav"
const repocount = 50

console.log(`hello my name is ${name} and my repo count is ${repocount}`);
// we can concatenate two or more string using '+' symbol but 
// in place we use(``) these as much better representation and easy to understand

const gameName = new String('abhinav-sharma-smt')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log((newString));

const anotherString = gameName.substring(-8,4)
console.log(anotherString);

const newStringOne = "  abhinav  "
console.log(newStringOne);

// trim function (trinStart and trimEnd -> it removes the space from starting of any string
// and end of any string)
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));

console.log(gameName.includes('smt'));

console.log(gameName.split('-'));


