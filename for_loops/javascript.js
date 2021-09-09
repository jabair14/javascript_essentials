var sentence = "Hello world. My name is Otto. I swim in a pool.";

// Number is the number of o's in a sentence.
var number = 0;

// Declare your internal index variable value.
// Loop for as long as `i` is less than or equal to the length of `sentence`
// After every loop iteration, increase `i` by one.
for(var i = 0; i <= sentence.length; i++) {

	if(i == 18) {
		break;
	} else {
		console.log(sentence[i]);
	}

	// Uncomment me, then refresh your page and look in your console.
	// continue;

	console.log('loop');

	if(sentence[i] !== undefined) {
		var letter = sentence[i].toLowerCase();

		if(letter === 'o') {
			number++;
		}
	}

	// Maximum of 3 letter o's, then break out of the loop.
	if(number == 3) {
		// Stop the loop NOW
		break;
	}
}

console.log("Found this many O's: ");
console.log(number);

// example 1

// var arr = ['one', 'two', 'three']

// for(var index in arr) {
// 	console.log(index, arr[index])
// }


