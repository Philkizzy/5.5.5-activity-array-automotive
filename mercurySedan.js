const Vehicle = require("./vehicleBaseClass")

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false
    }
    loadPassenger(num) {
        if (this.passenger < this.maximumPassengers) {
            if ((num + this.passenger) <= this.maximumPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + " not have enough space to take all passengers.");

            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }



    start() {
        if (this.fuel > 0) {
            console.log("engine has started.");
        } else {
            return this.started = false;
            console.log("no fuel");
        }
    }
    timeForMaintenance(mile) {
        if (mile > 30000) {
            this.scheduleService = true;
            console.log("Schedule service: " + this.scheduleService);
        }

    }
}


// Create Car Object
let carObject = new Car("love", "toyota", "2020", "black", "10000");

//Create Vehicle Object
let vehicleObject = new Vehicle("Mercury", "Sedan", "1965", "color", "mileage");

console.log(carObject); //Log Car Object
console.log(vehicleObject); // Log Vehicle Object