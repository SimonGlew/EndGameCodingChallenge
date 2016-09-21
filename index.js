/*Variables and Constants*/
var displayedValue = 0;
var firstValue = 0;
var buttonPressed = false;
var operation = "+";
var MAX_LENGTH = 10;

/*Function that adds on the given digit onto the displayed numbers and shows it*/
function addDigit(digit){
	if(!buttonPressed){
		displayedValue = digit;
		buttonPressed = true;
	}else{
		displayedValue = displayedValue + digit;
	}
	document.getElementById('displayNumbers').innerHTML = displayedValue;
}

/*Function that changes whether the displayedNumber is negative, it does this by checking the first index of the value and seeing what sign it has */
function changeSign(){
	if(displayedValue.indexOf('-') == 0){
		displayedValue = displayedValue.substring(1);
	}else{
		displayedValue = '-' + displayedValue
	}
	document.getElementById('displayNumbers').innerHTML = displayedValue;
}

/* Function that divides the displayedNumber by 100 */
function percentage(){
	displayedValue = displayedValue / 100;
	document.getElementById('displayNumbers').innerHTML = displayedValue;
}

/* Function that puts a decimal place into the number */
function decimalPoint(){
	displayedValue = displayedValue +'.';
	document.getElementById('displayNumbers').innerHTML = displayedValue;
}

/*Function that clears the display, and resets all variables back to original state */
function clearDisplay(){
	displayedValue = 0;
	memoryValue = 0;
	buttonPressed = false;
	document.getElementById('displayNumbers').innerHTML = displayedValue;
}

/* Function that stores the current operator in a variable and sets some variables to there required states */
function operate(operator){
	operation = operator;
	buttonPressed = false;
	firstValue = displayedValue;
	displayedValue = 0;
	document.getElementById('displayNumbers').innerHTML = displayedValue;
}

/* Function that calculates the results of your calculation, resets variables back to original state, unless wanting to continue on calculating values and displays result */
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

