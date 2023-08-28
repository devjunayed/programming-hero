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