//foreach loop advance  filter,map etc


// const coding = ["js","rb","py","java","cpp"]

// const values = coding.array.forEach(element => {
//     console.log(item);
//     return item // no return in foreach loop possible so we have a different 
//     // to do 
    
// });

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => num>4)
// const newNums = myNums.filter((nums) => {
//     return num>4      
//     // scope open therfore we used return statement
// })

const newNums = []
myNums.forEach((num) => {
    if(num>4){
        newNums.push(num)
    }
})

console.log((newNums));
