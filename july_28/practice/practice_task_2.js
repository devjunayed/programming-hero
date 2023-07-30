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