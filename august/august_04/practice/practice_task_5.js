/* 

৫. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 

*/

// method 1
/* function secondLargest(values){
    var secondLarge = 0, firstLarge = 0;
    for(let i = 0; i < values.length; i++){
        if(firstLarge < values[i]){
            firstLarge = values[i];
        }
    }
    values.splice(values.indexOf(firstLarge), 1);


    for(let i = 0; i < values.length; i++){
        if(secondLarge < values[i]){
            secondLarge = values[i];
        }
    }
    return secondLarge;
}
 */

// Method 2
function secondLargest(arr) {
  arr.sort(function (a, b) {
    return b - a;
  });

  return arr[1];
}
const numbers = [20, 30, 50, 2, 9, 6, 7];
console.log("Second largest is: ", secondLargest(numbers));
