const glass = { name: "glass", color: "golden", price: 12, isCleaned: true, };

// console.log(glass);

// all properties name
const keys = Object.keys(glass);
// console.log(keys);

// all property value
const values = Object.values(glass);
// console.log(values);



const pair = Object.entries(glass);
// console.log(pair);
// array of arra, two dimensional array
// [
//   [ 'name', 'glass' ],
//   [ 'color', 'golden' ],
//   [ 'price', 12 ],
//   [ 'isCleaned', true ]
// ]


// delete glass.isCleaned;
// console.log(glass);

// const {isCleaned, ...rest} = glass;

// console.log(rest);

// freeze
// Object.freeze(glass);
// Object.seal(glass); 
glass.source = 'Bangladesh';
console.log(glass);