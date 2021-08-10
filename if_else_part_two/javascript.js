// name = prompt('What is your name?');

// if (name.toLowerCase() == 'jabair'){
//     alert('Hello Jabair')
// }
var name = prompt('What is your name');

// if(name){
//     alert('Hello ' + name);
// } else if ( name == null){
//     alert('Your name is empty')
// }
// else {
//     alert('Hello guest');
// }

console.log(name)

if(name === 'null'){
    alert('Your name is empty')
} else if (name) {
    alert('Hello ' + name)
} else {
    alert('Hello guest');
}