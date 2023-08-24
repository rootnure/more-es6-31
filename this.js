class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    birthYear() {
        console.log(`${this.name} was born on ${2023 - this.age}`);
    }
    sleep(isSleeping){
        if(isSleeping) {
            console.log(`${this.name} is sleeping now`);
        }
        else {
            console.log(`${this.name} is not sleeping now`);
        }
    }
    dreaming(isSleeping, isDreaming) {
        if(isSleeping && isDreaming) {
            console.log(`${this.name} is dreaming now`);
        }
        else {
            console.log(`${this.name} is not dreaming now`);
        }
    }
    activities(isSleeping, isDreaming){
        this.birthYear();
        this.sleep(isSleeping);
        this.dreaming(isSleeping, isDreaming);
    }
}

const abul = new Person('Abul', 25);
// console.log(abul);
// abul.sleep();

const babul = new Person('Babul', 28);
console.log(babul);
// babul.sleep();

// babul.activities(false, false);


// this key won't work now
console.log(abul.sleep());
const lazy = abul.sleep;
// assigning only the class method to a new variable and calling that method using that variable won't work as reference won't work like this
// lazy();