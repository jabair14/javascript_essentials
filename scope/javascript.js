// A global var. Can be used inside functions, too. 
globalCounter = 0;

function add() {
	// A local var. Cannot be used outside of this function.
	var localCounter;

	// Increment the global var everytime this function runs.
	globalCounter++;
}


add();
add();
add();
add();
add();
add();
add();

// Log the final globalCount
console.log(globalCounter);


//local variables cannot be used outside there scope due to closure!!!
