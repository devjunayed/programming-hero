function sum(a, b, c){ // parameters
    const args = [...arguments];
    console.log(args);
    // for(const arg of arguments){
    //     console.log(arg);
    // }
    const result = a + b + c;
    return result;
}

const total = sum(45, 89, 12, 45, 98, 56);//arguments
console.log(total )
console.log(sum.length)