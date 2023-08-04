/* 
Problem:
========
Write a function findOddSum() that will take the
array [5, 7, 8, 10, 45, 30] as the input parameter
and will return the sum of the odd numbers.

*/ 

// sum of an array
function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

// sum of odd in an array
function getOddNumbersOfAnArray(numbers){
    let sumOfOdd = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 !== 0){
            sumOfOdd += numbers[i];
        }
    }
    return sumOfOdd;
}


const myNumbers = [5, 7, 8, 10, 45, 30];
const sumOfArray = getSumOfAnArray(myNumbers);
const oddSumOfArray = getOddNumbersOfAnArray(myNumbers);


console.log(sumOfArray);
console.log(oddSumOfArray);