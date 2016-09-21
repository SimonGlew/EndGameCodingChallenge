var displayedValue = 0;
var firstValue = 0;
var buttonPressed = false;
var operation = "+";
var MAX_LENGTH = 10;

function addDigit(digit){
	if(!buttonPressed){
		displayedValue = digit;
		buttonPressed = true;
	}else{
		displayedValue = displayedValue + digit;
	}
	document.getElementById('displayNumbers').innerHTML = displayedValue;
}

function changeSign(){
	if(displayedValue.indexOf('-') == 0){
		displayedValue = displayedValue.substring(1);
	}else{
		displayedValue = '-' + displayedValue
	}
	document.getElementById('displayNumbers').innerHTML = displayedValue;
}

function percentage(){
	displayedValue = displayedValue / 100;
	document.getElementById('displayNumbers').innerHTML = displayedValue;
}

function decimalPoint(){
	displayedValue = displayedValue +'.';
	document.getElementById('displayNumbers').innerHTML = displayedValue;
}

function clear(){
	displayedValue = 0;
	memoryValue = 0;
	buttonPressed = 0;
	document.getElementById('displayNumbers').innerHTML = displayedValue;
}

function operate(operator){
	operation = operator;
	buttonPressed = false;
	firstValue = displayedValue;
	displayedValue = 0;
	document.getElementById('displayNumbers').innerHTML = displayedValue;
}

function calculate(){
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

