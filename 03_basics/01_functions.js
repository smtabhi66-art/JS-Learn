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
// console.log(loginUserMessage("Abhinav"))

function calculateCartPrice(...num1){  // rest operation when variable parameters 
    // rest operation ... these triple dots also called spread operator too depend on use
    return num1
}
// console.log(calculateCartPrice(200,300,400));

const user = {
    username: "abhinav",
    price : 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"sam",
    price: 699,
})

 