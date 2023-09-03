function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'please enter a number';
    }
    return num1 + num2;
}

const result = add(12, false);
// console.log(result);

function multiply(num1, num2){
    return num1 * num2;
}


const output = multiply(12, 45);
console.log(output);