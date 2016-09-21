var displayedValue = 0;
var firstValue = 0;
var buttonPressed = false;
var operation = "+";
var MAX_LENGTH = 10;

function AddDigit(digit){
	if(!buttonPressed){
		displayedValue = digit;
		buttonPressed = true;
	}else{
		displayedValue = displayedValue + digit;
	}
	document.getElementById('displayNumbers').innerHTML = displayedValue;
}

function Clear(){
	displayedValue = 0;
	memoryValue = 0;
	buttonPressed = 0;
	document.getElementById('displayNumbers').innerHTML = displayedValue;
}

function Operate(operator){
	operation = operator;
	buttonPressed = false;
	firstValue = displayedValue;
	displayedValue = 0;
	document.getElementById('displayNumbers').innerHTML = displayedValue;
}

function Calculate(){
	var secondValue = displayedValue;
	if(operation == '+'){
		displayedValue = eval(firstValue) + eval(secondValue);
	}else if(operation == '-'){
		displayedValue = eval(firstValue) - eval(secondValue);
	}else if(operation == '*'){
		displayedValue = eval(firstValue) * eval(secondValue);
	}else if(operation == '/'){
		displayedValue = eval(firstValue) / eval(secondValue);
	}
	firstValue = displayedValue;
	secondValue = 0;
	buttonPressed = false;
	document.getElementById('displayNumbers').innerHTML = displayedValue;
}

