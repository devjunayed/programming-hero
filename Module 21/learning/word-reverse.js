function reverseWords(str){
    const reversedWord = [];
    const words = str.split(' ');
    for(let i = words.length - 1; i >= 0; i--){
        reversedWord.push(words[i]);
    }
    return reversedWord.join(' ');
}
const myString = 'I am a good boy';
console.log(reverseWords(myString));