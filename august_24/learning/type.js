// strongly typed langauge
// int a = 5;
// string b = 'alim halim khalim';
// bool c = True;
// Object stduent = {name: 'noya dhaman', id: 55}
// int[] numbers = [12, 45, 78]
// string[] friends = ['abul', 'babul'];



// JavaScript is a dynamic type language

// primitive type
const a = 5;
const b = 'Samsu kopain na ekhon ar';
const d = true;

// not primitive type
const ages  = [45, 65, 48];
const student = {id: 23, class: 7}

// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);


let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);


let p = {job: 'web developer'}
let q = p;
q.job = 'front end developer';
console.log(p, q);
