/* 
Problem:
=======
Tom and his friends are participating in the 'Who is the tallest?"
competition. As per the name, the person with the highest height 
will be the winner. Can you find who is the tallest among Tom and 
all of his friends?

Input:
======
The input line can have multiple integer number, xi(The height of ith
friend in cm).

Output:
=======
Print the height of the tallest friend(cm).

Sample Input 1:
==============
157 134 188

Sample Output 1:
===============
188

Sample Input 2:
==============
167 190 120  165 137


Sample Output 2:
===============
190

*/

function maxInArray(numbers) {
  var maxVal = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (maxVal < numbers[i]) {
      maxVal = numbers[i];
    }
  }
  return maxVal;
}

const heights1 = [157, 134, 188];
const heights2 = [167, 190, 120, 165, 137];

const tallest1 = maxInArray(heights1);
const tallest2 = maxInArray(heights2);

console.log("tallest person is: ", tallest1);
console.log("tallest person is: ", tallest2);
