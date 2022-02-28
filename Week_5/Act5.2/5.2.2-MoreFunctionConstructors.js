// create a function constructor that works as a template for an Animal
// include properties for name, type, weight, etc.

function Animal(name, type, weight) {//Makes Animal into a function like a factory with it's params being the required ingredients to acquire the appropriate outcome.
    this.name = name;//sets the key value pair value to equal the value of name assigned to any new value of name
    this.type = type;//same here
    this.weight = weight;//same here
    this.bio = `This is ${this.name} the ${this.type} and they weight ${this.weight} pounds.`//this. inserts the new value of the parameters into the function's outcome.
}

// create a new instance on an Animal

const jack = new Animal("Jack", "panther", 257);// assigns the variable to the new value of animal hence the word new and the 3 new parameters which are the "ingredients" for the factory.
console.log(jack);

// add methods to the Animal prototype

Animal.prototype.greet = function() {//Ads a prototype greet function that will run once invoked to any other variable with the same class
    return `Hi, I'm ${this.name} the ${this.type} and I'm not supposed to be able to talk.`
}

console.log(jack.greet())//Prints the value

// attach a method directly to the Animal instance that "overwrites" a prototype method

jack.greet = function() {//changes jack's default greet function to a new custom value
    return `Roar roar roar`
}

console.log(jack.greet())