//object property shorthand
const name='Bumba';
userAge=23;

const user={
    name,
    age:userAge,
    location:'Bengaluru'

}
console.log(user)
//object destructuring
const product={
    label:'Blue Notebook',
    price:50,
    stock:201,
    salePrice:undefined,
    rating:4.2
}
// const label=product.label;
// const stock=product.stock;
// const{label:productLabel, stock, price, rating=5}=product
// console.log(productLabel);
// console.log(price);
// console.log(stock);
// console.log(rating);
const transection = (type, {label,stock})=>{
    console.log(type,label,stock);
    
}
transection('order',product)