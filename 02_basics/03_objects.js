// singleton 
// when declred like literals not sigleton when declare by costructor it is singleton

// object literals

const JsUser = {
    name: "Abhinav",
    age : 18,
    // for symbols use [] for declaring
    [mySumb]: "myKey1",
    location : "Pune",
    email : "abhinav@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// ways for accesing objects
console.log(JsUser.email);
console.log(JsUser["email"]);// correct way or like more better way 

// object freeze one of dfunctions
 
JsUser.greeting  = function(){
    console.log("Hello JS User");
    
}
console.log();
