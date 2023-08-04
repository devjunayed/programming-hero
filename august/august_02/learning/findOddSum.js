/* 
Problem:
========
Write a function findOddSum() that will take the
array [5, 7, 8, 10, 45, 30] as the input parameter
and will return the sum of the odd numbers.

*/ 

function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

const myNumbers = [5, 7, 8, 10, 45, 30];
const sumOfArray = getSumOfAnArray(myNumbers);
console.log(sumOfArray);