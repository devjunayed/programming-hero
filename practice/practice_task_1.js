/* 
    Problem 01:
    ===========
    Write an arrow function that will take 3 parameters, will multiply the parameters
    and will return the result

*/


const multiply = (a, b, c) => a*b*c;
const mult = multiply(3,4,5);
console.log(mult);



/* 
    problem 02:
    ===========
    Write the following senetence in three lines and print the result:
    I am a web developer. I love to code. I love to eat biryani.
*/

const senetence = `I am a web developer.
I love to code.
I love to eat biryani.
`;
console.log(senetence);


/* 
    Problem 03:
    ===========
    Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.
*/


const add = (a , b=0) => a+b;
const sum = add(2);
console.log(sum);