// reduce ==> Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

const numbers = [55, 57, 61, 68, 60, 72];

const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);

const sum = numbers.reduce((p, c) => p + c, 0);
console.log(sum);