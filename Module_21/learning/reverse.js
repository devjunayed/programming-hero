 function reverseString(text){
    var reversedString = '';
    for(var i = text.length - 1; i >= 0; i--){
        reversedString += text[i];
    }
    return reversedString;
} 


//another simple looking way
// function reverseString(text){
//     return text.split('').reverse().join('');
// }

// We can just simply prrint no fucntion declaration is needed
// console.log(myName.split('').reverse().join(''));

const myName = 'My name is Junayed';


const reversedName = reverseString(myName);
console.log(reversedName);