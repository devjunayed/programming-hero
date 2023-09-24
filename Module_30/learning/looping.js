// for of use on array or string not in object
// for in use on object

const numbers = [1, 6, 8, 4];

// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

// while

for(const num of numbers){
    // console.log(num);
}

const nobab = 'Siranj ud Doula';
for(const char of nobab){
    // console.log(char);
}

const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true,
}

// will through error 
// for(const key of glass){
//     console.log(key);
// }

for(const key in glass){
    const value = glass[key];
    // console.log(value);
}

// optional
const keys = Object.keys(glass);
console.log(keys);

for(const key of keys){
    console.log(glass[key]);
}