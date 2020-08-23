// setTimeout(() => {
//   console.log("Two Seconds up!!");
// }, 2000);

// const name = ["jen", "Bumba", "Hank"];
// const shortNames = name.filter((name) => {
//   return name.length <= 4;
// });

// const geocode=(adress,callback)=>{
//        setTimeout(() => {
//         const data={
//             latitude:0,
//             longitude:0
//         }
//         callback(data)

//        }, 2000);
// }
// geocode('Bengaluru',(d)=>{
//     console.log(d)
// // })
// const add=(a,b, callback)=>{
//     setTimeout(() => {
//         callback(a+b)
//         console.log('Two Seconds are up!!!!')
//     }, 2000);
// }
// add(1,4,(sum)=>{
//     console.log(sum)
// })
// const chandu=(flake,jiru, callbavk)=>{
// setTimeout(() => {
//     callbavk(flake+jiru)
//     console.log('Dewa hye ge6e panch second e')
// }, 5000);
// }
// chandu(10,40,(s)=>{
// console.log(s+' hye6e tomar total bill')

// })

// const nit=(a,p,calbnkl)=>{
//     setTimeout(() => {
//         calbnkl(a+p)
//         console.log('dewA hye ge6e ek second e')
//     }, 1000);
// }
// nit(85,10,(gn)=>{
//     console.log(gn)
// })

const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback("This is an Error!!", undefined);
    callback(undefined, [1, 10, 50]);
  }, 2000);
};
doWorkCallback((err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log(result);
});
