// const userEmail = ""
// if(userEmail){
//     console.log("got user email");
// }
// else{
//     console.log("donot have email");   
// }

// falsey values
/*
false,0,-0,BigInt 0n,"",null,undefined,Nan
 */

// truthy (all except above falsey values)
/*
example + surprise
"0" zero in string
'false'," ",[],{},function(){}

*/

// for array checking true or false

// if (userEmail.lenght  ===0){
//     console.log("array is empty");    
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5??10
//val2 = null?? 10
//val1 = undefined ?? 45
val1 = null??10??20

// console.log(val1);

// ternary operator

//conditon ? true:false 

const icePrcie = 100
icePrcie<=80?console.log("Less than 80"):console.log("more than 80");

