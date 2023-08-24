// find ==> selects elements base on the condition and returns the first element that fulfilled the condition

const heights = [55, 57, 61, 68, 60, 72];

// const selected = heights.find(h => h > 60); // returns first value that is grater than 60
const selected = heights.find(h => h % 2 === 1); // returns first odd value

console.log(selected);

const friends = ['Asif', 'Rafid', 'Touhidur', 'Sabbir'];

const firstOddFriend = friends.find(name => name.length > 4); // returns first name thats' length is grater than 4
const noMatched = friends.find(name => name.length > 4); // returns undefined for no match found

console.log(firstOddFriend);
console.log(noMatched);