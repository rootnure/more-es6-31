// data access
const data = [{id: 1, name: 'Badshah', address: 'Gulistan', business: 'sell pan-supari'}];

// console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        {id: 1, name: 'lenovo laptop', price: 65000},
        {id: 2, name: 'macbook', price: 130000},
    ]
}

// console.log(products.data[1].price);


const user = {
    id: 5001,
    name: 'Riajul Islam',
    address: {
        street: {
            first: '12/2, North Side',
            second: 'Porir Goli',
            third: 'No Dorai'
        },
        city: 'Dacca'
    }
}

const user2 = {
    id: 5002,
    name: 'Awlad Molla',
    address: {
        city: 'Khalpara',
        country: 'Bangladesh'
    }
}

// optional chaingin using ? (question) mark
// it indicates --> if not undefined then go ahead
console.log(user.address.street?.second);
console.log(user2.address.street?.second);