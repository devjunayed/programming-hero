// 1. where to add
const placesList = document.getElementById('places-list');

// 2. what to be added
const myLi = document.createElement('li');
myLi.innerText = 'pahartoli bon';

// 3. add the child
placesList.appendChild(myLi);


// 1. where to add
const mainContainer = document.getElementById('main-container');

// 2. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "My Food list";
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = "Briyani";
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = "Borhani";
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = "Salad";
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = "Soft drinks";
ul.appendChild(li4);

section.appendChild(ul);

mainContainer.appendChild(section);


// set innerHTML  directly
const sectionDress =  document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress section</h1>
<ul>
    <li>Lungi</li>
    <li>T-shirt</li>
    <li>Jeans</li>
</ul>

`;

mainContainer.appendChild(sectionDress);