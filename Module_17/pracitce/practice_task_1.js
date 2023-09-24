/** Practice Problem 1
 * you are give an array;
 * var fruits = ['Apple', 'Bananan', 'Orange'];
 * 
 * a) Find the index of 'Banana' and replace 'Banana' with  'Mango'.
 * b) Remove 'Orange' and add 'Watermelon'.
 */


var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf('Banana');
fruits[bananaIndex] = 'Mango';
console.log(fruits);

fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);