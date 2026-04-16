const user ={
    username : "abhinav",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = " hitesh"
//     console.log((this.username)); // this not in fucntion only in object
    
// }


// arrow function form

// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

const addTwo = (num1,num2) => (num1+num2) 
 // if {} used than return must else if () then no need 
console.log(addTwo(3,4));
