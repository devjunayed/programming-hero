/** Practice Problem 1
 * Problem: Harry's mom gave him money and asked him
 * to by some oranges and apples. Writhe a program to 
 * help Harry to calculate how much mone the shopkeeper
 * will return.
 * 
 * Input: The first line of the input is the taka Harry's
 * mom gave him. The second line is the const of 1kg oranges
 * and 1kg of apples.
 * 
 * 
 * output:
 * Print the result
 * 
 * Sample Input: 1000, 700
 * Output: 300 
 * 
 * */

var momGave = 1000;
var orangesCost = 300;
var applesCost = 400;

var totalPrice = orangesCost + applesCost;
var returnMoney = momGave - totalPrice;

console.log(returnMoney);


/** Practice Problem 2
 * Problem: Write a program to calculat the average marks
 * of Mathematics, Biology, Chemistry, Physics and Bangla
 * of a student.
 * 
 * Input: The first line of the input is the marks of the 
 * five subjects mentioned above, respectively.
 *
 * Output: Print the result in 2 decimal places.
 * 
 * Sample Input: 75.25, 65, 80, 35.45, 99.50
 * 
 * Output: 71.04
 * 
 */

var Mathematics = 75.25;
var Biology = 65;
var Chemistry = 80;
var Physics = 35.45
var Bangla = 99.50;

var averageMarks = (Mathematics + Biology + Chemistry + Physics + Bangla) / 5;
averageMarks = parseFloat(averageMarks.toFixed(2));
console.log(averageMarks);


/** Practice Problem 3
 * Problem: John's teacher gave him two variables. Each variable
 * contains a string. John's teacher asked him to combine these
 * two strings and print them in one line. Help John Write the 
 * program.
 * 
 * Input: The first and the second line of the input contain the
 * strings.
 * 
 * Output: Print the result in one line.
 * 
 * Sample Input: I am going to be, an awesome web developer
 * 
 * Output: I am going to be an awesome web developer
 * 
 */


var firstString = 'I am going to be';
var lastString = 'an awesome web developer';

var contactedString = firstString + ' ' + lastString;
console.log(contactedString);


/** Practice Problem 4
 * Problem: Sarah's mother is teaching her mathematics.
 * She gave Sarah a number and asked her what the remainder
 * would be if she divided the number by 5. Help Sarah write
 * the program
 * 
 * Input: The first line of the input contains the number.
 * output: Print the remainder
 * 
 * Sample Input: 119
 * Output: 4
 */


var input = 119

var remainder = 119%5;

console.log(remainder);