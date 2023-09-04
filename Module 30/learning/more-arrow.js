const difference = (x, y) => x-y;
const multiply = (first, second, third) => first * second * third;


// single or more parameter
const getAge = (person) => person.age;

const student = {name: 'ananata', age: 45};
const age = getAge(student);

console.log(age);


const getThird = numbers => numbers[2];
const third = getThird([5, 9, 8, 10]);
console.log(third);

const doubleIt = num => num * 2;

// no parameter
const getPI = () => Math.PI;
console.log(getPI());

// large arrow function

const doMath = () => {

    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    
}