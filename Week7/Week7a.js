//Declaring and defining Car class
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    getName() {
        return this.name;
    }
    getYear() {
        return this.year;
    }
}

// Declaring a car object BMW
const BMW = new Car ("BMW", 2008);

// Using the object
console.log("My car is " + BMW.getName());
console.log("A " + BMW.getYear() + " model");