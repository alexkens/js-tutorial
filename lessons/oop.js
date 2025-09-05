import { print } from "../settings.js";
/*
class blueprint:

class className
    properties
        prop1
        prop2
    constructor
        className(prop1, prop2)
    methods
        method1(parameter)
        method2()
*/

/*
- classes and objects are concepts of OOP (Object Oriented Programming)
- class is a template to create objects, something like a blueprint
- object is a specific instance of a class

source: https://www.geeksforgeeks.org/javascript/classes-and-objects-in-javascript/
*/

// simplest approach for creating an object
let object = {}; // empty object
object.name = 'marty macfly'; // properties can be created

// example of a simple class with constructor, a method and get/set methods
class Vehicle {
    constructor(type, brand, model) {
        this.type = type;
        this.brand = brand;
        this.model = model;
    }

    represent() {
        print(`Hello! I'm a ${this.type} and I was built by ${this.brand}`);
    }

    get getModel() {
        return this.model;
    }

    set setModel(model) {
        this.model = model;
    }
}

let myCar = new Vehicle("car", "bmw", "S-123");
let myBike = new Vehicle("bike", "kletter", "B-321");

// example of a class that extends Vehicle and thus inherits its properties
class Plane extends Vehicle {
    constructor(type, brand, model, pilot) {
        super(type, brand, model);
        this.pilot = pilot;
    }
    represent() {
        print(`Hello, I'm a ${this.type} and my pilot is called ${this.pilot}`);
    }
}

let myPlane = new Plane("plane", "boeing", "377", "marty macfly");