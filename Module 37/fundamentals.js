// 1. How to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

// 2. Conditions
// 6 basic conditions: >, <, ===, !==, <=, >=
// multiple conditions: &&, || 


if(fatherName === 'arnold' || season === 'rainy'){

}else if(fatherName === 'Arnold'){

}else{

}

// 3. array declare
// index, 
// length, push, 
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

// 4. for loop 
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

// 5. function
function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}

const output = multiply(35, 78);
console.log(output);

// 6. Object
// 3 ways to  access property by name

const student = {
    name: 'Salib khan',
    age: 32,
    mmovies: [
        'king khan',
        'Dhakar mastan'
    ]
}

const myVariable = 'age';


console.log(student.age); // direct by property
console.log(student['name']); // access via property name string
console.log(student[myVariable]);// access via property name in a variable

