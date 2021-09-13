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
		console.log(this.sound);
	}

	// Set the name. Subclasses inherit this method.
	setName(name) {
		this.name = name;
	}
}

// Creates a new class based on the Animal blueprint
class Dog extends Animal {
	// Overwrite the speak() method
	speak() {
		console.log("New sound: woof");
	}

	// Set this species
	setSpecies(species) {
		this.species = species;
	}
}

var dog = new Dog('Chandler');
dog.setSpecies('dog');
dog.setName('Monica');

