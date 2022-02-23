
// refactor your Animal function constructor and methods to use the class keyword

class Animal{
    constructor(name, type, color, weight, age, personality){
      this.name = name;
      this.type = type;
      this.color = color;
      this.weight = weight;
      this.age = age;
      this.personality = personality;
  
      this.bio = `This ${this.personality} ${this.color} ${this.type} is ${this.age} years old, weighs ${this.weight} pounds, and is called ${this.name}.`
    }
    greeting() {
      return "Hello! Hi, I'm a ${this.type}!";
    }
  };
  
  console.log("Animal ... \n", Animal);
  
  // extend the Animal class with a type of animal 
  // add some unique methods and properties to the class extension
  
  class Cat extends Animal {
    constructor(name, type, color, weight, age, personality, breed){
      super(name, type, color, weight, age, personality);
      this.breed = breed;
    }
    greeting() {
      return "Meeeoooow!";
    }
  }; 
  
  console.log("\n Cat ... \n", Cat);
  
  // create an instance of the class extension and call one of its methods
  
  const Garfield = new Cat("Garfield", "Cat", "Orange", 130, 15, "Sassy", "Mutt");
  
  Garfield.play = function() {
    return 'I love to play with my food!';
  };
  
  console.log("\n Garfield instance of Cat ... \n", Garfield);
  
  console.log("\n Garfield greeting...", Garfield.greeting());
  
  console.log("\n Garfield play...", Garfield.play());