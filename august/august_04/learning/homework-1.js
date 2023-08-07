/* 
  1. Write a function that will take 3 numbers will return 
    the max number

    => first time do it using if-else
    => second time do it using Math.min or Math.max
*/

// using if-else
/* function maxNumber(a, b, c){
    if(a > b && a > c){
        return a;
    }else if(b > a && b > c){
        return b;
    }else{
        return c;
    }
}
 */

// using Math.max()
function maxNumber(a, b, c){
    return Math.max(a, b, c);
}



const result1 = maxNumber(5, 9, 2);
console.log(result1);

