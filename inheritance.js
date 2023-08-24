// parent class
class Vehicle{
    isActive = true;
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('gari chole na chole na chole na re');
    }
}

// child class that inherit properties form parent
class Bus extends Vehicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
    dropPassenger(){
        console.log('Bus will drop passengers at their destination');
    }
}

// another child class that have different properties from other child class
class Truck extends Vehicle{
    constructor(name, price, loadCapacity){
        super(name, price);
        this.loadCapacity = loadCapacity;
    }
    unload(){
        console.log('truck will unload the load');
    }
}