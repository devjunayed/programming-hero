/* 

১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 

*/


function smallestNum(values){
    var minValue = values[0];
    for(let i = 0; i < values.length; i++){
        if(minValue > values[i]){
            minValue = values[i];
        }
    }
    return minValue;
}

const numbers = [2, 9, 8,3 , 5, 4];
console.log(smallestNum(numbers));