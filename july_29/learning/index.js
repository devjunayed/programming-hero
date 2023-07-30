var numbers = [45, 68, 78, 56, 89, 98];

// 1. get element by index
var element = numbers[1];
console.log(element);

// 2. update element value by index
numbers[1] = 77;
numbers[3] = 44;
console.log(numbers);

// 3. find index of an element
// var positionIndex = numbers.indexOf(188); 
// will show -1 due to not having the element in array
var positionIndex = numbers.indexOf(89);

console.log(positionIndex);