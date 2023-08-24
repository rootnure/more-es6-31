const person = {
    'full-name': 'Piyar ali',
    job: 'To to kore ghure berano',
    3: 'third',
    '123abc': 'Some text'
}

console.log(person.job); // dot notation
console.log(person['job']); // bracket notation using property name directly as string
const prop = 'job';
console.log(person[prop]); // bracket notation using property name in a variable

// benefit of bracket notation
// console.log(person.3) // can't use dot notation now
console.log(person[3]); // will work perfectly now for number alike property name
console.log(person['123abc'])
// console.log(person.full-name) // dot notation will give syntax error
console.log(person['full-name']); // will work fine for hyphen used property name