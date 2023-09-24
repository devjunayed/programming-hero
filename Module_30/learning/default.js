// default --> if value is not provided, take this as a default.
function add(num1 = 0, num2 = 0){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result
}
// const sum = add(1, 7); 

add(0, 8);

function fullName(first, last = ''){
    const full = first + ' ' + last;
    return full;
}

function friends(number=[]){

}
function person(human = {}){

}

