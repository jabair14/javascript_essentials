function clone() {
	var person = {
		name: "Elon Musk",
		age: 45,
		tech: ['PayPal', 'SpaceX', 'Hyperloop', 'Tesla'], 
		changeName: function(new_name) {
			this.name = new_name;
			return this;
		},
		changeAge: function(new_age) {
			this.age = Number(new_age); // or parseInt()
			return this;
		}
	};

	return person;	
}

var person = clone();
var clone1 = clone();
clone1.changeName("Definitely not a clone!");
var clone2 = clone();
clone2.changeName("George Cloney");

console.log(clone1);
console.log(clone2);

person.changeName('John Johnman').changeAge(12);
person['married'] = true;


document.querySelector('#test').innerHTML = person.name + ' is ' + person.age +
											' years old and has started ' +
											person.tech.join(", ");


person.changeAge("SUPER OLD");

for(var key in person) {
	if(person[key].constructor === String) {
		console.log(key, person[key].constructor, person[key]);
	}
}