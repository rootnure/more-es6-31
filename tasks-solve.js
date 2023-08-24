/* Task 1 */
const oddNumbers = [1, 3, 5, 7, 9];
// for of loop
const evenNumbers = [];
for (const number of oddNumbers) {
    evenNumbers.push(number + 1);
}
// array.map()
const evenNumbers2 = oddNumbers.map(num => num + 1);


/* Task 2 */
const numbers = [33, 50, 79, 78, 80, 101, 30];
const output = numbers.filter(num => num % 10 === 0);


/* Task 3 */
const output2 = numbers.find(num => num % 10 === 0);


/* Task 4 */
const instructors = [
    { name: 'Nodi', age: 28, position: 'Senior' },
    { name: 'Akil', age: 26, position: 'Junior' },
    { name: 'Shobuj', age: 30, position: 'Senior' }
];

const seniorInstructors = instructors.filter(instructor => instructor.position.toLowerCase() === 'senior').map(instructor => instructor.name);


/* Task 5 */
const peoples = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 }
];
// for of loop
let totalAge = 0;
for(const people of peoples) {
    totalAge += people.age;
}
// array.reduce()
const ageTotal = peoples.reduce( (previousAgeTotal, currentPeople) => previousAgeTotal + currentPeople.age , 0);



console.log(ageTotal);
console.log(totalAge);

// console.log(seniorInstructors);

// console.log(output2);

// console.log(output);

// console.log(evenNumbers2);
// console.log(evenNumbers);