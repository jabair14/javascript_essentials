class Animal {

	// This is called a Method
	constructor(species, name) {
		// This is called a property 
		this.species = species.toLowerCase(); // ie. dog
		this.name = name;
		this.height = 32;
	}

	speak() {
		console.log("Woof");
	}

	renameAnimal(name) {
		this.name = name;
	}
}

var dog = new Animal('dog', 'Joey');
console.log(dog);

dog.speak();

dog.renameAnimal('Ross');

console.log(dog);