function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments); // array like object
}

add(12, 13, 20, 38, 90);