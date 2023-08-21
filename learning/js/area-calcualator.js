function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);


    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);

    // calculating area
    const area = 0.5*base*height;

    // showing area
    const areaSpan =  document.getElementById('triangle-area');
    areaSpan.innerText = area;
}

function calculateRectangleArea(){
    // get rectangle base value
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
  


    // get rectangle height value
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);

    // calculating area
    const area = width*length;

    // showing area
    const areaSpan =  document.getElementById('rectangle-area');
    areaSpan.innerText = area;
}

function calculateParallelogramArea(){
    // get parallelogram base value
    const base = getInputValue('parallelogram-width');

    // get parallelogram height value
    const height = getInputValue('parallelogram-height');

    // calculating area
    const area = base*height;

    // showing area
    setElementInnerText('parallelogram-area', area);
}

// reusable get input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reusable set span, p, div,etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}