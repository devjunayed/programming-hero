/* Practice Problem 2

Problem:
=======
Write a function findLeapYear() that will take the array
[2023, 2024, 2025, 2028, 2030] as the input parameter and
will check if each year is a leap year. If a year is a leap
year inset that year in an new array return the new array 
and print the result.

 */


function findLeapYear(years){
    var leapYear = [];
    for(let i = 0; i < years.length; i++){
        if((years[i] % 4 === 0 && years[i] % 100 == 0) || years[i] % 400 === 0 || (years[i] % 4 === 0 && years[i] % 100 != 0)){
            leapYear.push(years[i]);
        }
    }
    return leapYear;
}

const years = [2023, 2024, 2025, 2028, 2030];
const arrayOfLeapYears = findLeapYear(years);
console.log(arrayOfLeapYears);