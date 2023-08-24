// forEach ==> loops through each element of the array and do the operation that you passed in the call back function and do not return (value is undefined)

const numbers = [3, 5, 6, 8, 4];
// const result = numbers.forEach(n => console.log(n * 2));
// code can be multi lined
const result = numbers.forEach(n => {
    const output = n * 2;
    console.log(output);
});
// do not return (value will be undefined)
console.log(result);