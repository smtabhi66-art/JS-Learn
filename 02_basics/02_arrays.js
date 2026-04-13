const marvel_heros = ["thor","Ironman","hulk"]
const dc_heros = ["superman","batman","flash"]

// marvel_heros.push(dc_heros)
//what will happen :
// so as the array can have everything in it also the array too
// so when we push it completely push the array in place of just the data in the array 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// method 2 for concat 
marvel_heros.concat(dc_heros)
// not working the way we want 

const allHeros = marvel_heros.concat(dc_heros)

//we need a new arrray to store concat doesnot work on like previous array as can been below 
// console.log(allHeros);

// console.log(marvel_heros);

// spread operator 

const all_newHeros = [ ...marvel_heros,...dc_heros]
console.log(all_newHeros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Abhinav"));
console.log(Array.from("Abhinav"));
console.log(Array.from({name:"Abhinav"})); 
// interestinfd as we have to define like for which to make array for key or for values
// if not then simply empty array as nothing there
