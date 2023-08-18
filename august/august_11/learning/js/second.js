console.log("second js file")

const secondList = document.getElementById('second-list');

const li = document.createElement('li');
li.innerText = 'My dynamic item';

secondList.appendChild(li);