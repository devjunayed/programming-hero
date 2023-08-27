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
/* function getOddNumbersSumOfAnArray(numbers){
    let sumOfOdd = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 !== 0){
            sumOfOdd += numbers[i];
        }
    }
    return sumOfOdd;
}
*/

// const myNumbers = [5, 7, 8, 10, 45, 30];
// const sumOfArray = getSumOfAnArray(myNumbers);
// const oddSumOfArray = getOddNumbersSumOfAnArray(myNumbers);


// console.log(sumOfArray);
// console.log(oddSumOfArray); 



// getting all odd numbers from an array
function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0){
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [5, 7, 8, 10, 45, 30];
// const arrayOfNumbers = [12, 65, 45, 78, 32, 45, 91];
const allOddNumbers = getOddNumbersOfAnArray(myNumbers);
const sumOfOddNumbers = getSumOfAnArray(allOddNumbers);
console.log(sumOfOddNumbers);