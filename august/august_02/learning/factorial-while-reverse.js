function factorial(number){
    let result = 1;
    while(number >= 1){
        result *= number;
        number--;
    }
    return result;
}

const num = 9;
const fact = factorial(9);
console.log(fact);