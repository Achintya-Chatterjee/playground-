const tasks = {
  tasks: [
    {
      text: "Grocerry Shopping",
      completed: true,
    },
    {
      text: "Clean yerd",
      completed: true,
    },
    {
      text: "Film Course",
      completed: false,
    },
  ],
  getTasksToDo() {
    return this.tasks.filter((task) => task.completed === true);
  },
};
console.log(tasks.getTasksToDo());
// const kaj = {
//   kaj: [
//     {
//       text: "Khawa Done",
//       completed: true,
//     },
//     {
//       text: "San kora",
//       completed: true,
//     },
//     {
//       text: "Dinner Holo",
//       completed: false,
//     },
//   ],
//   getKajToDo() {
//     const kajToDo = this.kaj.filter((kaje) => {
//       return kaje.completed === true;
//     });
//     return kajToDo;
//   },
// };
// console.log(kaj.getKajToDo());
// const works = {
//   works: [
//     {
//       text: "Game Khela",
//       completed: false,
//     },
//     {
//       text: "Mobile Tepa",
//       completed: false,
//     },
//     {
//       text: "Fuck Off",
//       completed: true,
//     },
//   ],
//   getWorksToDo() {
//     const workToDo = this.works.filter((work) => {
//       return work.completed === false;
//     });
//     return workToDo;
//   },
// };
// console.log(works.getWorksToDo());
// const kacha={
//     kacha:[
//         {
//             text:'jamakapor saf',
//             completed:true
//         },
//         {
//             text:'Bedsheet saf',
//             completed:true
//         },
//         {
//             text:'mile deya',
//             completed:false
//         }
//     ],
//     getKachaToDo(){
//         const kachaToDo=this.kacha.filter((kachakuchi)=>{
//             return kachakuchi.completed===true;
//         });
//         return kachaToDo
//     },
// }
// console.log(kacha.getKachaToDo())
