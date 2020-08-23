const fs=require('fs');
// const book={
//      title:'Ego is the enemy',
//      author:'Ryan Holiday'
// }


// const bookJSON = JSON.stringify(book);
// // console.log(bookJSON);

// const rr=fs.writeFileSync('1-json.json',bookJSON);
// const dataBuffer= fs.readFileSync('1-json.json');
// const dataJSON=dataBuffer.toString();
// const data=JSON.parse(dataJSON);
// console.log(data.title);
const dataBuffer=fs.readFileSync('1-json.json');
const user=JSON.parse(dataJSOn);
user.name='Bumba';
user.age=23;
user.planet='india'
const userJSON=JSON.stringify(user);
fs.writeFileSync('1-json.json',userJSON);