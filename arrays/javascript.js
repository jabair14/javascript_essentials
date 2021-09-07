var arr = ['one', 'two', 'three'];

var newArray = ['one', ['2.1', '2.2', '2.3'], 'three'];
			  // 0				1				2
			  // 		0		1		2

var test = document.querySelector('#test');

for(var index in newArray) {
	// test.innerHTML += '<br />' + newArray[index];
	if(newArray[index].constructor === String) {
		console.log(newArray[index]);
	}
}


// var arr = ['one', 'two', 'three']

// console.log(arr)

// for(var index in arr) {
// 	console.log(arr[index])
// }