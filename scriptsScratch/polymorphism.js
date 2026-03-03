class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Some animal sound");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    makeSound() {
        console.log("Woof-woof!");
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    makeSound() {
        console.log("Meow!");
    }
}

class Cow extends Animal {
    constructor(name, givesMilk) {
        super(name);
        this.givesMilk = givesMilk;
    }

    makeSound() {
        console.log("Mooo!");
    }
}

function animalSpeak(animal) {
    console.log(`${animal.name} says:`);
    animal.makeSound();
    console.log("---");
}

const dog = new Dog("Reks", "German shepard");
const cat = new Cat("Scar", "Black");
const cow = new Cow("Cow", true);
const genericAnimal = new Animal("Unknown animal");

const animals = [dog, cat, cow, genericAnimal];
animals.forEach(animalSpeak);
