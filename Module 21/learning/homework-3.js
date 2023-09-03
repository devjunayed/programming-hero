// Write a function to get the lowes number in an array


function minInArray(numbers) {
    var minVal = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
      if (minVal > numbers[i]) {
        minVal = numbers[i];
      }
    }
    return minVal;
  }
  
  const numbers1 = [157, 134, 188];
  const numbers2 = [167, 190, 120, 165, 137];
  
  const lowest1 = minInArray(numbers1);
  const lowest2 = minInArray(numbers2);
  
  console.log("Lowest value is: ", lowest1);
  console.log("Lowest value is: ", lowest2);