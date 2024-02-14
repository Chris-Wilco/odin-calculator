const calcDisplay = document.querySelector('#calc-display');
const key1 = document.querySelector('#key-1');
const key2 = document.querySelector('#key-2');
const key3 = document.querySelector('#key-3');
const key4 = document.querySelector('#key-4');
const key5 = document.querySelector('#key-5');
const key6 = document.querySelector('#key-6');
const key7 = document.querySelector('#key-7');
const key8 = document.querySelector('#key-8');
const key9 = document.querySelector('#key-9');
const key0 = document.querySelector('#key-0');
const keyClr = document.querySelector('#key-clr');
const keyEquals = document.querySelector('#key-equals');

key1.addEventListener('click', function (e) {
    promptForGridSize();
});
key2.addEventListener('click', function (e) {
    promptForGridSize();
});
key3.addEventListener('click', function (e) {
    promptForGridSize();
});
key4.addEventListener('click', function (e) {
    promptForGridSize();
});
key5.addEventListener('click', function (e) {
    promptForGridSize();
});
key6.addEventListener('click', function (e) {
    promptForGridSize();
});
key7.addEventListener('click', function (e) {
    promptForGridSize();
});
key8.addEventListener('click', function (e) {
    promptForGridSize();
});
key9.addEventListener('click', function (e) {
    promptForGridSize();
});
key0.addEventListener('click', function (e) {
    promptForGridSize();
});
keyClr.addEventListener('click', function (e) {
    promptForGridSize();
});
keyEquals.addEventListener('click', function (e) {
    operate();
});

let displayValue = "";
let num1 = "";
let addToNum1 = true;
let num2 = "";
let operation = "";
let operationSelected = false;
let answerValue = "";
let lastAnswerValue = "";

function operate(){
    if(!canDoMath()){
        return;
    }
    switch (operation) {
        case '+':
            add();
            break;
        case '-':
            subtract();
            break;
        case '*':
            multiply();
            break;
        case '/':
            divide();
            break;
            
        default:
    }
    lastAnswerValue = answerValue;
    displayValue = answerValue;
}

//Check to make sure all needed variables have values so math can be done.
function canDoMath(){
    return operationSelected && num1 != "" && num2 != "";
}

function selectOperation(operationValue){
    if(operationSelectable()){
        if(num1 == ""){
            num1 = lastAnswerValue;
        }
        operation = operationValue;
        operationSelected = true;
        addToNum1 = false;
        return true;
    }
    return false;
}

function operationSelectable(){
    return num1 == "" && lastAnswerValue == "" ? false : true;
}

function add(){
    answerValue = num1 + num2;
}

function subtract(){
    answerValue = num1 - num2;
}

function multiply(){
    answerValue = num1 * num2;
}

function divide(){
    answerValue = num1 / num2;
}

function clear(){
    lastAnswerValue = answerValue;
    answerValue = "";
    displayValue = "";
    num1 = "";
    num2 = "";
    operation = "";
    addToNum1 = true;
}

function keyPress(keyPressed){
    if(keyPressed.getClassList.contains("function-key")){
        functionKeyPress(keyPressed);
    } else if(keyPressed.getClassList.contains("operation-key")){
        operationKeyPress(keyPressed)
    } else if(keyPressed.getClassList.contains("number-key")){
        numberKeyPress(keyPressed);

    }
}

//for mathematical operations keys
function operationKeyPress(keyPressed){
    clearKeysPressed();

    if(selectOperation(keyPressed.getAttribute('value'))){
        keyPressed.classList.add("key-selected");
    }

}

//for equals and clr function keys
function functionKeyPress(keyPressed){

    if(keyPressed.id == "key-equals" && canDoMath()){
        clearKeysPressed();
        keyPressed.classList.add("key-selected");
        operate();
    } else if(keyPressed.id == "key-clear"){
        clearKeysPressed();
        keyPressed.classList.add("key-selected");
        clear();
    }
}

//for number keys
function numberKeyPress(keyPressed){

}

//TODO: change key display text to white for a short duration and then fade back to black.
function showKeyPress(keyPressed){

}

//clear the ".key-selected" class from all function keys
function clearKeysPressed(){
    let functionKeys = document.querySelectorAll('.non-number-key');
    functionKeys.forEach(element => {
        if(element.getClassList.contains("key-selected")){
            element.classList.remove("key-selected");
        }
    });
}
























