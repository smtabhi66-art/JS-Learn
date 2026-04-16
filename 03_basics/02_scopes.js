
// scope
 {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);
 
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); out of scope therefore give error
    two()
}
// one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); out of scope
}
// console.log(username); out of scope 


// ++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++ //

// addone(5)
// console.log(addone);
// can use before declaration
function addone(num){
    return num+1
}


// addtwo(5); 
 // cannot use before declaration
const addtwo = function(num){
    return num+2;
}

