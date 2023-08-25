/* 
    Problem:
    ========
    Write an arrow function where it will do the following:
    a) It will take an array where the array elements will be the name of your friends
    b) Check if the length of each element is even, push elements with even length to a new array and return the result.
*/

const friends = ['rahim', 'karim', 'jabbar', 'sattar', 'bablu', 'chinku', 'rinku', 'pinku'];

const evenNamedFriends = friends => {
    const evenName = [];
    for(let i = 0; i < friends.length; i++){
        if(friends[i].length % 2 == 0){
            evenName.push(friends[i]);
        }
    }
    return evenName;
};

const newFriends = evenNamedFriends(friends);
console.log(newFriends);

