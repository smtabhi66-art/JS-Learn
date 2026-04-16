// if condition
const isloggedin = true
if (isloggedin)//(condition is true then this scope executes)
{
    console.log(true);

}
else{
    console.log(false);
}

//'==' check if both same also using type conversion like 2=="2" will give 
// but 2 is int and "2" is string
// now '===' is a strict cheker it also check type 
// like for 2==="2" it give false as both of diff data type

// var is completely global scope but when we need a local scope it creates some error 
// there fore we do not use var we used either const or let

// const balance = 1000

// if (balance < 500) {
//     console.log("test");
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else if(balance<900){
//     console.log("less than 750");
// }
// else if(balance<1200){
//     console.log("less than 750");
// }

// nesting

// const userLoggedIn = true
// const debitCard = true
// const userLoggedInFromGoogle = true
// const userLoggedInFromEmail = true
// if(userLoggedIn && debitCard){
//     console.log("Allow to buy course");
// }
// if(userLoggedInFromEmail || userLoggedInFromGoogle){
//     console.log("user logged in");
    
// }
