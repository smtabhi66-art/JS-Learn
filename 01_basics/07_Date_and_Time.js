let myDate = new Date()
// console.log(myDate.toString());
//  console.log(myDate.toDateString());
 
//  console.log(myDate.toISOString());
//  console.log(myDate.toLocaleDateString());
//  console.log(myDate.toJSON());
//  console.log(myDate.toLocaleString());
//  console.log(myDate.toTimeString());
 
// console.log(typeof myDate);

// let myCreateDate = new Date(2023,0,23)
// let myCreateDate = new Date("2023-01-14")
// let myCreateDate = new Date(2023,0,23,5,3);
// console.log(myCreateDate.toLocaleString());

 let myCreateDate = new Date("01-14-2023"); 

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Date.now());
let newDate = new Date()

newDate.toLocaleString('default',{
    weekday:"long",
})