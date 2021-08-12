
// New function
function changeMainHtml() {
	// Select the #main body 
	var main = document.querySelector('#main');

	// Two new sentences to toggle
	var sentence1 = "Hello, thank you for changing me!";
	var sentence2 = "Oh hello, I'm a different sentence!";

	// If the innerHTML of #main matches sentence1, toggle it to sentence 2.
	if(main.innerHTML == sentence1) {
		main.innerHTML = sentence2;
		main.style.padding = "50px";
	} else {
		// The innerHTML of #main did not match sentence1 (it's different),
		// set it back to it's default "sentence1" content;
		main.innerHTML = sentence1;
		main.style.padding = "0px";
	}
}

// See "event types.txt" for a list of event types.
