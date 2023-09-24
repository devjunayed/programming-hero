var numbers = [78, 45, 98, 45];

// use push to add element to an array as the last elemaent of the array
numbers.push(63);
console.log(numbers);
// output: [78, 45, 98, 45, 63]

// we can do same for strings array
var friends = ["balam", "kalam", "salam"];
friends.push("gelam");
friends.push("pailam");
console.log(friends); 
// output: ['balam', 'kalam', 'salam', 'gelam', 'pailam']

// use pop to get rid of the last element
numbers.pop();
console.log(numbers);
// output: [78, 45, 98, 45]

/* if we put pop to a variable than deleted value will be stored
 to tha variable*/
var element = numbers.pop();
console.log(numbers);
// output: [78, 45, 98]
console.log(element);
// output: 45

/**
 * 1. push will add an element to the end of an array
 * 2. pop will remove an element from the end of an array
 * 3. unshift will add an element to the beginning of an array
 * 4. shift will remove an element from the beginning of an array
 */
