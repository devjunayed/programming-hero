function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const value = parseFloat(inputField.value);
    inputField.value = '';
    return value;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const value = parseFloat(element.innerText);
    return value;
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}