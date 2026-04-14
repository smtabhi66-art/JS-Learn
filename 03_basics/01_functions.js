// console.log("A");
// console.log("B");
// console.log("H");
// console.log("I");
// console.log("N");
// console.log("A");
// console.log("V");

function sayMyName(){
console.log("A");
console.log("B");
console.log("H");
console.log("I");
console.log("N");
console.log("A");
console.log("V");
}

// sayMyName() // with parenthesis its execution without it is just reference
// sayMyName

function addTwoNum(num1,num2){ // here it is called parameter
    // console.log(num1 + num2);

    // let result = num1+num2
    // return result

    return num1+num2
    
}

const result = addTwoNum(3,4)// here its argument the values

// console.log("Result: ",result);

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Abhinav"))