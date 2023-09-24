/* 
Problem:
========
The standard height of a volleyball player is 7 feet. Jim wants to join
the volleyball team, so he decided to measure his height to see if he 
meets the standard. Calculate his height in feet.
To convert inch to feet:    feet = inch / 12

Input:
======
The input line has the height in inch.

Output:
======
Print the height in feet


Demo Input:
==========
84

Demo Output:
============
7
*/

// const myInches = 12;
// const myFeet = myInches / 12;
// console.log(myFeet);

// const dadaInches = 144;
// const dadaFeet = dadaInches / 12;
// console.log('dada feet ', dadaFeet);

// const dadiInches = 60;
// const dadiFeet = dadiInches / 12;
// console.log('dadi feet ', dadiFeet);



function inchToFeet(inches){
    const feet = inches / 12; 
    return feet;
}

const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log('Dada Feet : ', dadaFeet);


const nanaInches = 168;
const nanaFeet = inchToFeet(nanaInches);
console.log('Nana feet', nanaFeet);