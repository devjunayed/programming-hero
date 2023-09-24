/* 
Problem:
========
Peter's school teacher asked him to write a program that would true
if a number is even and false if a number is odd. Help peter write 
the program.

Input:
======
The first and second input lines contain the numbers.

Output:
=======
Print true if the number is an even number and false if the number
is an odd number.


Demo Input:
===========
98
117

Demo Output:
============
true
false

*/


function isEven(val){
    if(val % 2 == 0){
        return true;
    }
    return false;
}

const result1 = isEven(98);
const result2 = isEven(117);

console.log(result1);
console.log(result2);