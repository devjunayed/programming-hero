function greeting(greetingHandler, name){
    greetingHandler(name);
}
// const name = 'Halim mama';
// const number = [45, 54, 78];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};

function greetingHandler(name){
    console.log('Good Morning', name);
}


function greetEvening(name){
    console.log('Good Evening', name);
}


function greetNight(name){
    console.log('Good Night', name);
}

greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom Brady');
greeting(greetingHandler, 'Tom Cruise');
greeting(greetEvening, 'Tom Soaliman');
greeting(greetEvening, 'Tom Salman');
greeting(greetNight, 'Tom Salman');


function submitHandler(){
    console.log('Submit button clicked');
}

document.getElementById('btn').addEventListener('click', submitHandler);