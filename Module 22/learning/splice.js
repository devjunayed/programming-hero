const friends = [12, 45, 32, 12, 44, 62, 29, 69, 87];

// Removes eleemnts from an array
// and, if necessary, inserts new elements in their place
// returning the deleted elements
// will change the original array

const partial = friends.splice(2, 5, 99, 555, 7777);
console.log(partial);
console.log(friends);