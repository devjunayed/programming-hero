const addProduct = () => {
    const productField = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = productQuantity.value;
    productField.value = "";
    productQuantity.value = "";

    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);
}


const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}

const getStroedShoppingCart = () => {
    let cart = {};
    const storedCart  = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStroedShoppingCart();
     cart [product] =  quantity;
     const cartStringified = JSON.stringify(cart);
     localStorage.setItem('cart', cartStringified);
    }
    
const displayProductsFromLocalStorage = () => {
    const savedCart = getStroedShoppingCart();
    for(const product in savedCart){
        const quantity = savedCart[product];
        displayProduct(product, quantity);
    }
}
    displayProductsFromLocalStorage();