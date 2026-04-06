const accountId = 144553
let accountEmail = "abhinav123@gmail.com"
var accountPassword = "1234"  
accountCity = "Jaipur"
let accountState;

accountEmail = "abc@gmail.com"
accountPassword = "234"
accountCity = "Bengluru"
// accountId = 2 not allowed
console.log(accountId);
/*
Prefered not to use var 
because of issue in block scope and functional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

