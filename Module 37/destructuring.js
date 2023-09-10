// 1. array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];


// const [x, y] = [42, 65];

const [x, y] = numbers;

function boxify(num1, num2){
    const nums = [num1,num2];
    return nums;
}
// const [first, second]  = [90, 34];
const [first, second]  = boxify(90, 34);

// console.log(boxify(90, 34));

const student = {
    name: 'Salib khan',
    age: 32,
    mmovies: [
        'king khan',
        'Dhakar mastan'
    ]
}

const [firstMovie, secondMovie] = student.mmovies;
// console.log(firstMovie);


// object destructering
// const {name, age} = {name: 'alu', age: 14}
// console.log(name, age);
const {name, age} = {id: 12, name: 'alu', salary: 14000, age: 14};

const employee = {
    ide: 'VS code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const {machine, ide} = employee;
const {weight, address} = employee.specification;
const {brand} = employee?.specification?.watch;
console.log(brand)