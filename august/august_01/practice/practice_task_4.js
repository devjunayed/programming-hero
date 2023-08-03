/**
 * Write a function called odd_even() which takes an integer value and tells whether this
 * value is even or odd. You need to do it in 4 ways:
 *   
 *  => Has return + Has parameter
 *  => No return + Has parmeter
 * 
 */

// Has return + Has Parameter
function odd_even(num){
    if(num % 2 == 0){
        return "Even";
    }
    return "Odd";
}

var result = odd_even(4);
console.log(result);




// No return + Has parameter
function odd_even(num){
    if(num % 2 == 0){
        console.log('Even');
    }else{
        console.log('Odd');
    }
}
odd_even(5);


