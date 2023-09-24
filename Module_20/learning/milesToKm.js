/* 
Problem:
=======
John is web developer, and he cycles to work. He knows the distance 
between his house and his office in miles. John wants to measure the 
distance in kilometers. Calculate the distance in km.

To convert miles to km:    km = miles * 1.60934

Input:
======
The input line has the distance in miles.

Output:
======
Print the distance in km.


Demo Input:
===========
2

Demo Output:
============
3.21868
*/


function milesToKilometer(miles){
    return miles * 1.60934; 
}

const officeDistanceMiles = 2;
const officeDistanceKilometer = milesToKilometer(officeDistanceMiles);
console.log('Distance in Kilometer: ', officeDistanceKilometer);