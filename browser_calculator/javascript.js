// basic calculator function.
// Doesn't return anything; it changed the #answer in the DOM.


function Calculator() {
	let answer = document.querySelector('#answer');
	let num1 = (document.querySelector('#num1').value);
	let num2 = (document.querySelector('#num2').value);
	let select = document.querySelector('select');
	let operator = select.options[select.selectedIndex].value;
	let theCalculatedAnswer;

	let int1 = parseInt(num1)
	let int2 = parseInt(num2)
	
	console.log(int1 + int2)
	
	
	if(operator == 'add') {
		theCalculatedAnswer = int1 + int2;
	} else if(operator == 'minus') {
		theCalculatedAnswer = int1 - int2;
	} else if(operator == 'divide') {
		theCalculatedAnswer = int1 / int2;
	} else if(operator == 'multiply') {
		theCalculatedAnswer = int1 * int2;
	} else {
		theCalculatedAnswer = "Invalid operator";
	}
	
	answer.innerHTML = theCalculatedAnswer;
}

// alert('Please select an operator');