const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sadha sadha';


const searchString = 'Pakhi';
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes('Pakhi');
// const doesExist = lyrics.includes(searchString.toLowerCase());

const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();

const doesExist = lyricsLowerCase.includes(searchStringLower);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());

// console.log(doesExist);
// console.log(doesExistOneLine);

// ------------------------------------------------------
// indexof

console.log(lyrics.indexOf('kaila'));
console.log(lyrics.indexOf('Tumi'));

if(lyrics.indexOf('sadha') !== -1){
    console.log("Exists inside the string");
}else{
    console.log('cannot find it');
}

// startWith
console.log(lyrics.startsWith('2umi'));

// endswith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';


console.log(fileName.endsWith('.pdf'));