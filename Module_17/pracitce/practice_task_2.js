
/** Pracitce Problem 2
 * You and your friends Tom, Jane,Peter and John got their final exam
 * results. your toal score is 85, Tom's total score is 66, janes' total
 * score is 95, Peter's total score is 56 and John's total score is 40.
 * The grading chart is 
 * 
 * 80 or above A grade
 * 60 or above B grade
 * 50 or above C grade
 * 40 or above D grade
 * 39 or less => F grade
 * 
 * Write a program to find your and your friend's grades usign if-else.
 */

var myGrade = 85;
var tomGrade = 66;
var janeGrade = 95;
var peterGrade = 56;
var johnGrade = 40;

var grade = tomGrade;

if(grade >= 80){
    console.log('A');
}else if(grade >= 60 && grade <= 79){
    console.log('B');
}else if(grade >= 50 && grade <= 59){
    console.log('C');
}else if(grade >= 40 && grade <= 49){
    console.log('D');
}else{
    console.log('F');
}