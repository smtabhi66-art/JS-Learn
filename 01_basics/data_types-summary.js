//Primitive
// 7 types : String,Number,Boolean,null,undefined,symbol,BigInt


// Refernce (Non Primitive)

// Array,Object,Function 

const heros = ["shaktiman","nagraj","doga"]
{
    name: "abhinav",
    age = 22;
}
 
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-Primitive)  -> (Memory)


let myChannelName = "abhinavSharma"

let anotherName = myChannelName

anotherName = "abhinav"
console.log(myChannelName);

console.log(anotherName);

let user1 = {
    email : "user@gmail.com",
    upi : "user@eby"
}

let user2 = user1

user2.email = "abhinav@gmail.com";

console.log(user1.email);
console.log(user2.email);

