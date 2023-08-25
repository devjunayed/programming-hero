/* 
Write an arrow funciton where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the result

Print the result
*/

const maximumOfTwoArray = (first, second) => {
    let newArr = [...first, ...second];
    return Math.max(...newArr);
};


const array1 = [34, 56, 7,8, 90,23, 49,1, 2, 3, 4, 87];
const array2 = [97, 2, 1, 23, 90, 67, 234, 23, 34, 56];


const maximum = maximumOfTwoArray(array1, array2);
console.log(maximum);