let products = [

    {name: "Laptop", price: 1000},
    {name: "Phone", price: 500},
    {name: "Watch", price: 300}
];
let discount = products.map(products =>{
    return{
        name: products.name,
        price: products.price * 0.9
    };
})
console.log(discount)