const numbers = [45, 65, 23, 98, 19];

/* for(let i = 0; i < numbers.length;i++){
    const number = numbers[i];
    console.log(number);
} */
/* 
for(const number of numbers){
    console.log(number);
} */

const products = [
    {
        name: "Samsung",
        camera: 12,
        storage: "32gb",
        price: 36000,
        color: "silver",
      },
      {
        name: "Walton phone",
        camera: 10,
        storage: "32gb",
        price: 22000,
        color: "silver",
      },
      {
        name: "iphone",
        camera: 10,
        storage: "32gb",
        price: 82000,
        color: "silver",
      },
      {
        name: "Xiaomi phone",
        camera: 10,
        storage: "32gb",
        price: 52000,
        color: "silver",
      },
      {
        name: "Oppo",
        camera: 10,
        storage: "32gb",
        price: 20000,
        color: "silver",
      },
      {
        name: "Nokia",
        camera: 10,
        storage: "32gb",
        price: 44000,
        color: "silver",
      },
      {
        name: "HTC Phone",
        camera: 10,
        storage: "32gb",
        price: 62000,
        color: "silver",
      },  
];

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'phone');
console.log(result);