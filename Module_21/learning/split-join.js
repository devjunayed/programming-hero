const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sadha sadha';

const parts = lyrics.split(' ');
// console.log(parts);

const sentences = lyrics.split('.');
// console.log(sentences);

const chars = lyrics.split('');
// console.log(chars);

const partial1 = lyrics.slice(5, 8);
// console.log(partial1);

const partial2 = lyrics.substring(5, 8);
// console.log(partial2);


const greeting = '     Hello World        ';
// console.log(greeting.trim());


const lines = [
    'Tumi bondhu kala pakhi ami jeno ki',
    'bosonto kala tomai bolte pari ni',
    'kala kala sadha sadha',
    'rong jomeche sadha kala'
  ];

  const newSong = lines.join(". ");
  console.log(newSong);