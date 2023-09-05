const addProduct = () => {
    const productField = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = productQuantity.value;
    console.log(product, quantity);
    productField.value = "";
    productQuantity.value = "";
}