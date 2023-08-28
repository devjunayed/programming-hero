var shoppingCart = {
    books: 3,
    sunglass: 1, 
    keyboard: 5,
    mouse: 1, 
    pen: 25,
    shoes: 2,
    bottle: 1
}


const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);


for(var i = 0; i < keys.length; i++){
    console.log(keys[i]);
    console.log(values[i]);
}

// for in loop
for (var propartyName in shoppingCart){
    console.log(propartyName);
}