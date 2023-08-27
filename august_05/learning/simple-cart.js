const shoppingCart = [
    {
        name: 'shoe',
        price: 1200,
    },
    {
        name: 'Shirt',
        price: 2200
    },
    {
        name: 'pant',
        price: 3700
    },
    {
        name: 'belt',
        price: 600
    }
];

function totalCost(products){
    var sum = 0;
    for(let i = 0; i < products.length; i++){
        sum += products[i].price;
    }
    return sum;
}

const costs = totalCost(shoppingCart);
console.log(costs);