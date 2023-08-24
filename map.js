// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array


const numbers = [5, 4, 6, 7, 10];

// #1: using normal function
const doubled = [];
for(const n of numbers) {
    const double = n * 2;
    doubled.push(double);
}
// console.log(doubled);

// #2. using map and calling normal function
function doubleIt(n) {
    return n * 2;
}

const doubled2 = numbers.map(doubleIt);
// console.log(doubled2);

// #3. using map and calling arrow function
const doubleIt2 = n => n * 2;

const doubled3 = numbers.map(doubleIt2);
// console.log(doubled3);

// #4. using map and arrow function combination (will use this)
const doubled4 = numbers.map(n => n * 2);
// console.log(doubled4);



// -----------------------------------------------------------------------------

const nums = [9, 7, 6, 5, 8];

const squared = nums.map(n => n * n);
// console.log(squared);
const fiveBonus = nums.map(n => n + 5);
// console.log(fiveBonus);
const halves = nums.map(n => n / 2);
// console.log(halves);


const friends = ['Asif', 'Rafid', 'Touhidur', 'Sabbir'];

const lengths = friends.map(friend => friend.length);
// console.log(lengths);

const firstLetters = friends.map(name => name[0]);
console.log(firstLetters);