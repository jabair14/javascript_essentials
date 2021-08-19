// try {
// 	// code in here
// 	var name = prompt("What's your name?");

// 	if(name != "secret") {
// 		// Throw a new error.
// 		// Once an error is thrown, nothing below this line in the try{} block
// 		// is executed 
// 		throw "unknown_user";
// 	} else {
// 		// Do something good. 
// 		alert("You are allowed in here");
// 	}
// } catch(error) {
// 	// error
// 	if(error == 'unknown_user') {
// 		// do something
// 		document.querySelector('#test').innerHTML = "Sorry, you're no longer signed in";
// 	} else {
// 		// Its a difference error.
// 		document.querySelector('#test').innerHTML = error.message;
// 	}

// 	console.log(error, error.message);
// } finally {
// 	document.querySelector('#test').innerHTML += "<br /> Try/catch/finally was run";
// }

try {
	var team = prompt ("What's your favorite team?");

	if ( team != "Steelers") {
		throw "incorrect_error";
	} else {
		alert("That's Correct!");
	}
} catch(error) {
	if (error == "incorrect_error") {
		document.querySelector('#test').innerHTML = "Sorry, that is not correct."
	} else {
		document.querySelector('#test').innerHTML = error.message;
	}

	console.log(error, error.message)
} finally {
	document.querySelector('#test').innerHTML += ' Finally is now run.'
}
