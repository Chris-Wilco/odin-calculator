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
    promptForGridSize();
});

let displayValue = "";
let num1 = "";
let num2 = "";
let operation = "";
let answerValue = "";
let lastAnswerValue = "";

function operate(){
    if(num1 == "" || num2 == "" || operation == ""){
        return;
    }
    switch (expression) {
        case add:
            add(num1, num2);
            break;
        case subtract:
            subtract(num1, num2);
            break;
        case multiply:
            multiply(num1, num2);
            break;
        case divide:
            divide(num1, num2);
            break;
            
        default:
    }

}

function doMath(){

}

//Check to make sure all needed variables have values so math can be done.
function canDoMath() {
    if(num1 == "" )
}

function operationSelected(){
    if(num1 == ""){
        lastAnswerValue != "" ? num1 = lastAnswerValue : 
    }
    num1 == "" ? num1 = lastAnswerValue : 
}

function add(num1, num2){
    let result = num1 + num2;
    answerValue = result;
    return 

}

function subtract(num1, num2){
    
}

function multiply(num1, num2){
    
}

function divide(num1, num2){
    
}

function clear(){
    lastAnswerValue = answerValue;
    answerValue = "";
    displayValue = "";
    num1 = "";
    num2 = "";
    operation = "";

}























