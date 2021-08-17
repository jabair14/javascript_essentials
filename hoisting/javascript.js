function changeText() {
	a = "Something";

	document.querySelector('#test').innerHTML = a + ' ' + b;
	
	b = "Else";

	// Hoisting is to declare variables at the top of their scope.
	// It doesn't mean the variables have a value yet.
	var a;
	var b;
}


changeText();