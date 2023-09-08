// alert('Hello! look at me!');

const alertUser = () => {
    alert('Be attentive and serious to invest time in learning!');
}

const seriousStudent = () => {
    const res = confirm('Are you spending 6-8 hrs every single day to learn web development?');
    if(res === true){
        alert("Well done! Keep it up.");
    }else{
        console.log('Valo hoye jao!!!! kopale dukkho ase');
    }
}

const getName = () => {
    const name = prompt("What is your name");
    console.log(name);
}