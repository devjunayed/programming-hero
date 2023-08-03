/** Practice problem 3
 * 1. You are give three numbers 13, 79, and 45. Write a program that will
 * print the largest number using if-else.
 * 
 * 2. Your are give a triangle with the sides 9, 8, 9. Write a program to 
 * check whether a triangle is Isosceles or not using if-else.
 *              
 *              Isosceles => two sides are equal
 */

var firstNumber = 130;
var secondNumber = 79;
var threeNumber = 450;

if(firstNumber > secondNumber){
    if(firstNumber > threeNumber){
        console.log(firstNumber + ' is the largest');
    }else{
        console.log(threeNumber + ' is the largest');
    }
}else{
    if(secondNumber > threeNumber){
        console.log(secondNumber + ' is the largest');
    }else{
 
        console.log(threeNumber + ' is the largest');
    }
    
}


var side1 = 8;
var side2 = 9;
var side3 = 9;

if(side1 == side2 || side1 == side3 || side2 == side3){
    console.log('Triangle is Isoceles');
}else{
    console.log('Triangle is not Isoceles!!!');
}