/** practice task 3
 *  Write a function called make_avg() which will take an array of integers and
 *  the size of that array and return the average of those values.
 */

function make_avg(numbersVal, numbersLen){
    var sum = 0, i;
    for(i = 0; i < numbersLen; i++){
        sum+=numbersVal[i];
    }
    console.log(sum);
    return parseFloat((sum/numbersLen).toFixed(2));
}

var numbers = [9, 2, 5, 3, 6, 7, 90, 20, 30];

var average = make_avg(numbers, numbers.length);
console.log(average);


