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

	getName() {
		return this.name;
	}

	heightToCm() {
		return this.cms = this.height * 2.5; // Return cm's.
	}

}

var dog = new Animal('dog', 'Ross');

var cms = dog.heightToCm();
console.log(cms);

console.log(dog.cms);