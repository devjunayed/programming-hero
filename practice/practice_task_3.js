/* 
    Write an arrow function where it will do the following: x<sup>2</sup>
    a) Square each array element
    b) Calculate the sum of the squared elements
    c) Return the average of the sum of the squared elements
*/

const averageAgeOfLiving = [23, 34, 90, 80, 65, 56, 45, 68, 70];

const average = (averageAgeOfLiving) => {
  let squaredSum = 0;
  for (let i = 0; i < averageAgeOfLiving.length; i++) {
    squaredSum += Math.pow(averageAgeOfLiving[i], 2);
    console.log(squaredSum);
  }
  return squaredSum / averageAgeOfLiving.length;
};

const avg = average(averageAgeOfLiving).toFixed(2);
console.log(avg);
