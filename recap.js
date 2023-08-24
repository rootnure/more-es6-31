/**
 * 1. var let const
 * 2. default parameter
 * 3. template literals
 * 4. arrow function
 * 5. destructuring
 * 6. Object.keys(), Object.values(), Object.entries(), delete, freeze, seal
 * 7. for...of used in array or sting
 * 8. for...in used in object
 */


const a = 56;
const numbers = [44, 42, 11];
const person = {name: 'Kono nam nai'}

const msg = `Hi, ${person.name} has a: ${a} access to ${numbers[2]}`;


const square = x => x * x;
const sum = (a, b) => a + b;


const {age, z, ...others} = {x:2, y: 5, z: 3, name: 'Absar', age: 55}
const [first, second, ...rest] = ['Sabit', 'Rafid', 'Asha', 'Vowmik', 'Sarwar'];


