function factorial(number){
    result = 1;
    for(let i = number; i >= 1; i--){
        result *= i;
    }
    return result;
}
const number = 5;
const fact = factorial(5);
console.log('factorial of', number, fact );