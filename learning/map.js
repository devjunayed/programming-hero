// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array
const numbers = [4, 5, 2, 8,10];
// const doubled = [];

// function doubleIt(num){
//     return num*2;
// }

// const result = numbers.map(doubleIt);
// console.log(result);

// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double);
// }

// console.log(doubled);


const doubled = numbers.map(num => num*2);
// console.log(doubled);

const fiveBonus = numbers.map(num => num + 5);
// console.log(fiveBonus);

const halves = numbers.map(num => num/2);
// console.log(halves);


const friends = ['Tom', 'John', 'Michel', 'Oliver'];

const lengths = friends.map(frnd => frnd.length);
// console.log(lengths);

const firstLetter = friends.map(frnd => frnd[0]);
console.log(firstLetter);