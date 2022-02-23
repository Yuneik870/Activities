// create an object literal
const bird = {//Since the object bird has a list of key value pairs within, it makes it into a key value pair
    kind: "parrot",//declares it's key value "kind" to be a parrot
    featherless: false,//Declares that the key value featherless to be the boolean false
    favoriteToys: ["balls", "microphones", "pop-its"]//Declares the key value "favoriteToys" to be an array of strings containing "balls", "microphone", and "pop-its",
}

// include a method that uses "this"

const owner = {
    name: "Kaeya",
    greet() {
        return `Hello, my name is ${this.name} and I own a pet ${bird.kind} who loves ${bird.favoriteToys[0]}, ${bird.favoriteToys[1]}, and ${bird.favoriteToys[2]}.`;
    }
}//returns the string value "Hello, my name is Kaeya and I own a pet parrot who loves balls, microphones, and pop-its."


// create a function in the global scope that prints "this"

console.log(owner.greet());//prints the greet function in the owner function