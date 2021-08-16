// basic calculator function.
// Doesn't return anything; it changed the #answer in the DOM.
function Calculator() {
	let answer = document.querySelector('#answer');
	let num1 = Number(document.querySelector('#num1').value);
	let num2 = Number(document.querySelector('#num2').value);
	let select = document.querySelector('select');
	let operator = select.options[select.selectedIndex].value;
	let theCalculatedAnswer;

	if(operator == 'add') {
		theCalculatedAnswer = num1 + num2;
	} else if(operator == 'minus') {
		theCalculatedAnswer = num1 - num2;
	} else if(operator == 'divide') {
		theCalculatedAnswer = num1 / num2;
	} else if(operator == 'multiply') {
		theCalculatedAnswer = num1 * num2;
	} else {
		// alert('Please select an operator');
		theCalculatedAnswer = "Invalid operator";
	}

	answer.innerHTML = theCalculatedAnswer;
}
