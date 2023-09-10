// 1. JSON
const student = {
    name: 'Salib khan',
    age: 32,
    movies: [
        'king khan',
        'Dhakar mastan'
    ]
}
const studentJSON = JSON.stringify(student);
// console.log(studentJSON);


const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

// 2. fetch
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data));
// keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// console.log(values);

// for 
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);
console.log(numbers)

// for of on array like object
// loop on an object using for in

// add or remove from an array
const products = [
    {
      name: "laptop",
      price: 32000,
      brand: "lenovo",
      color: "silver",
    },
    {
      name: "phone",
      price: 7000,
      brand: "iphone",
      color: "golden",
    },
    {
      name: "watch",
      price: 3000,
      brand: "casio",
      color: "yellow",
    },
    {
      name: "sunglass",
      price: 300,
      brand: "raybon",
      color: "black",
    },
  ]; 

  const newProduct = {name: 'webcam', price: 700, brand: 'Lal'};

// copy products array and then add newProduct


const newProducts = [...products, newProduct];
// console.log(newProducts);

// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining)
