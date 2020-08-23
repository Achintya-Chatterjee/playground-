// const square=function (x) {
//     return x*x
// }
// const square=(x)=>{
//     return x*x
// }
// const square=(x)=>x+x;
// console.log(square(10));
const event={
    name:'Birthday Party',
    guestList:['Bumba','Jen','Mike'],
    printGuestList:function(){
        console.log('Guest List for '+this.name);
        this.guestList.forEach((guest)=>{
            console.log(guest +' is attending '+this.name);
        })
    }
}
event.printGuestList();
// const mobile={
//     name:'Mobile Phone',
//     rMobile:['Galxay Neo','Moto S Plus','Disco Mob'],
//     printMobile:function(){
//         console.log('Amar a6e '+this.name);
//         this.rMobile.forEach((phone)=>{
//             console.log(phone+' Amar '+this.name)
//         })
//     }
// }
// mobile.printMobile();
const people={
    name:'Akshay Maity',
    roLok:['Lalu Yadav','Nitish Kr','Peltu'],
    printPeople:function(){
        console.log(`Ami thki ${this.name} er sthe!!!!`);
        this.roLok.forEach((honu)=>{
            console.log(honu+' thke '+this.name+' er sthe!!!');
        })
    }
}
people.printPeople()
// const headphone={
//     name:'Boult Audio',
//     printHeadphone(){
//         console.log('Amr Headphone holo '+this.name);
//     }
// }
// headphone.printHeadphone()