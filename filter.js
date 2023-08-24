// filter ==> selects elements base on the condition and returns an array with the elements that fulfilled the condition

const heights = [55, 57, 61, 68, 60, 72];

// const selected = heights.filter(h => h > 60); // returns array of values grater than 60
const selected = heights.filter(h => h % 2 === 1); // returns array of odd values

console.log(selected);

const friends = ['Asif', 'Rafid', 'Touhidur', 'Sabbir'];

const oddFriends = friends.filter(frnd => frnd.length > 4);

console.log(oddFriends);