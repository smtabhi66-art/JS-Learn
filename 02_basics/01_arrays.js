// array

const myArr = [0,1,2,3,4,5] 
console.log(myArr[0]);

// Array Methods 

// myArr.push(6)
// console.log(myArr);
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9) // adds or pushes in start
// myArr.shift() //removes from start

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(1));

const newArr = myArr.join()

// console.log(newArr);
// console.log(typeof newArr );
// console.log(myArr);

// slice splice 

console.log("A " , myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)

console.log(myn2);

// so the difference between the slice and splice is like :
// slice just give you the part from the array but 
// in splice it simply manipulte the orignal array and cut the part of range from the array 
// also this time complete range including the edges
