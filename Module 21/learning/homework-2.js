/* 
  1. Write a function that will take 3 parameters and will 
    return the min number

   => first time do it using if-else
   => second time do it using Math.min or Math.max
*/

// using Math.min()
function minNumber(a, b, c){
    return Math.min(a, b, c);
}

const result2 = minNumber(5, 9, 2);
console.log(result2);