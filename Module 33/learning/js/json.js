const user = {id: 1, name: "Gorib Aair", job: 'actor'};

// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user)
// console.log(stringified);

/* 
{ id: 1, name: 'Gorib Aair', job: 'actor' }
{"id":1,"name":"Gorib Aair","job":"actor"}
 */

const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD',
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
console.log(shop)
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const shopObj = JSON.parse(shopJSON);
console.log(shopObj)