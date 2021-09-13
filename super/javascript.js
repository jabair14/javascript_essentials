// New class
class Animal {

	// This is called a Method
	constructor(name) {
		// This is called a property 
		this.species = 'unknown';
		this.name = name;
		this.height = 32;
		this.sound = 'Woof';
	}

	// Basic method
	speak() {
		console.log("The animal says: ");
		// console.log(this.sound);
	}

	// Set the name. Subclasses inherit this method.
	setName(name) {
		this.name = name;
	}

	// Set this species
	setSpecies(species) {
		this.species = species;
	}
}

// Creates a new class based on the Animal blueprint
class Dog extends Animal {
	// Overwrite the speak() method,
	// But `super` lets us use whatever is in the parent method.
	speak() {
		super.speak();			// Call Animal.speak()
		console.log("woof");	// Dog says woof
	}

	// Becomes available to Cat
	jump() {
		// 
	}
}

class Cat extends Dog {
	speak() {
		super.speak();			// Call Dog.speak()
		console.log("meow");	// Cat says meow
	}
}

var cat = new Cat('Chandler');
cat.speak();


//super only goes one parent class above it i.e. the class that it is extending