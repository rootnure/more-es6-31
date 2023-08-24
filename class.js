const products = [
    {id: 1, brand: 'Lenovo', price: 65000},
    {id: 2, brand: 'DELL', price: 45000},
    {id: 3, brand: 'HP', price: 52000},
    {id: 4, brand: 'MAC', price: 150000},
];

// has some properties
class Product{
    country = 'Bangladesh';
    constructor(name) {
        this.name = name;
    }
    speak(talk) {
        console.log(`Talking about ${talk}`);
    }
}

const lenovo = new Product('Le le lenovo');
console.log(lenovo);
lenovo.speak('oba kita kau');


class Teacher{
    isBSCPassed = true;
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    lecture() {
        console.log(`${this.name} SIR is teaching ${this.subject}`);
    }
}

const tapon = new Teacher('Tapon Das', 'Physics');
console.log(tapon);

const faruk = new Teacher('Faruk Ahmed', 'English');
console.log(faruk); // access the instance

tapon.lecture(); // access the instance method
faruk.lecture();

console.log(Math);