const phones = [
  {
    name: "Samsung",
    camera: 12,
    storage: "32gb",
    price: 36000,
    color: "silver",
  },
  {
    name: "Walton",
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
    name: "Xiaomi",
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
    name: "HTC",
    camera: 10,
    storage: "32gb",
    price: 62000,
    color: "silver",
  },
];

function cheapestPhones(phones){
     let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){ 
        var phone = phones[i];
       if(phone.price < cheapest.price ){
        cheapest = phones[i];
       }
    }
    return cheapest;
}

const mySelection = cheapestPhones(phones);
console.log(mySelection);
