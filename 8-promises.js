// const doWorkPromise = new Promise((resolve, rejecet) => {
//   setTimeout(() => {
//     // resolve([45, 50, 12]);
//     rejecet("Thing went Wrong!!!!!");
//   }, 2000);
// });

// doWorkPromise
//   .then((result) => {
//     console.log("success", result);
//   })
//   .catch((errr) => {
//     console.log("Error!!", errr);
//   });
const add = (a, b) => {
  return new Promise((resolve, rejecet) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};
// add(2, 5)
//   .then((sum) => {
//     console.log(sum);

//     add(sum, 5)
//       .then((sum2) => {
//         console.log(sum2);
//       })
//       .catch((errr) => {
//         console.log(errr);
//       });
//   })
//   .catch((errr) => {
//     console.log(errr);
//   });
add(2, 6)
  .then((sum) => {
    console.log(sum);
    return add(sum, 7);
  })
  .then((sum2) => {
    console.log(sum2);
  })
  .catch((errrrrr) => {
    console.log(errrrrr);
  });
