const user = {id: 1, name:'Gorib', job:'programming'};
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

const shop ={
    owner:'kalia',
    address:{
        street: 'jani na',
        city: 'secret',
        country: 'bd'
    },
    products:['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 69000,
    isOpen: true,
    isNew: false
}
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObject = JSON.parse(shop);
console.log(shopObject);