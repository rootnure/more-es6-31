const products = [
    {id: 1, brand: 'Lenovo', price: 65000},
    {id: 2, brand: 'DELL', price: 45000},
    {id: 3, brand: 'HP', price: 52000},
    {id: 4, brand: 'MAC', price: 150000},
];

// map
const brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(p => p.price);
// console.log(prices);

// forEach
products.forEach(p => console.log(p.id));

// filter
const expensive = products.filter(p => p.price > 60000);
console.log(expensive);

// filter
const affordable = products.find(p => p.price < 60000);
console.log(affordable);

// reduce
const total = products.reduce( (acum, product) => acum + product.price , 0);
console.log(total);