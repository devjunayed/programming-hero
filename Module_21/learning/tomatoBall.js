/* 
Problem:
=======
Jerry loves playing TomatoBall online. He always starts with TomatoBall
from the first round. Sometimes he reaches the 3rd round, sometimes the
4th round, and so on. Eventually, he becomes bored and stops playing. So,
what is Jerry's final score when he stop's game?

Input:
======
The input line can have multiple integer numbers, xi(The Score in ith round).

Output:
======
Print the final(total) score.

Sample Input 1:
==============
20 13 37

Sample Output 1:
================
70

Sample Input 2:
===============
5 25 27 33 10 15

Sample Output 2:
===============
115
*/


const sampleInput1 = [20, 13, 37];
const sampleInput2 = [5, 25, 27, 33, 10, 15];

function getScore(values){
    var scoreSum = 0;
    for(let i = 0; i < values.length; i++){
        scoreSum += values[i];
    }
    return scoreSum;
}

const jerrysScore1 = getScore(sampleInput1);
const jerrysScore2 = getScore(sampleInput2);

console.log(jerrysScore1);
console.log(jerrysScore2);