// const tinderUser = new Object() singleton object
const tinderUser = {} // non sngleton object

tinderUser.id = "123av"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularuser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "abhinav",
            lastname: "sharma"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1:"A",2:"B"}
const obj2 = {3:"C",4:"D"}

// const obj3  = (obj1,obj2) wrong mthod

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
console.log(obj3);

 // objects in array

 const user  = [
    {
        id : "abcd"
    }
    // multiple objects can be in an array 
 ]