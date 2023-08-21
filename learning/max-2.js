
/*
Problem (Part 2):
================
This year, not only Jim & Dela but also Chinku are doing hard
work to secure the first position. Can you find out who will
get the delicious cake?

Input:
=====
The input line has three values, x (The marks Jim has got),
y (The marks Dela has got) and z (The marks Chinku has got).

Output:
=======
Print the name of the topper.

Sample Input 1:
===============
84 99 77

Sample Output 1:
================
Dela

Sample Input 2:
===============
69 97 99

Sample Output 2:
===============
Chinku

*/


const jim = 69;
const dela = 97;
const chinku = 99;

function getMax(a, b, c){
    if(jim > dela && jim > chinku){
        return 'Jim';
    }else if(dela > jim && dela > chinku){
        return 'Dela';
    }else{
        return 'Chinku';
    }
}

// const result = getMax(jim, dela, chinku);
const result = Math.max(jim, dela, chinku);
console.log(result);


// Homework: 1
/* 
    1. Write a function that will take 3 numbers will return 
    the max number

    2. Write a function that will take 3 parameters and will 
    return the min number

    first time do it using if-else
    second time do it using Math.min or Math.max
 */