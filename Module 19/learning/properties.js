var shoppingCart = {
    books: 3,
    sunglass: 1, 
    keyboard: 5,
    mouse: 1, 
    pen: 25
}

// when you know the specifice property name, use dot nontation
// to get the value
var penCount = shoppingCart.pen;


// alternative system:
// when you know the specifice property name, use dot notation to 
// get the value

var penCount2 = shoppingCart['pen'];

var properties = Object.keys(shoppingCart);

var values = Object.values(shoppingCart);

// console.log(properties);
// console.log(values);
// console.log(shoppingCart);
// console.log(penCount);


// set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
