let myName="Roshan     "
console.log(myName.trueLength); // Roshan



// let myHeros = ["thor", "spiderman"];

// let heroPower={
//     thor:"Hammer",
//     spiderman:"web",
//     getSpiderPower:()=>{
//         console.log(`spidey power is ${this.spiderman}`); 
//     }
// }
// Object.prototype.Roshan=function(){
//     console.log(`Roshan is in all object`);
// }

// Array.prototype.heyRoshan=function(){
//     this.push("Hey Roshan");
//     console.log("roshan");
// }

// // heroPower.Roshan()
// myHeros.Roshan()
// myHeros.heyRoshan();
// // heroPower.heyRoshan();

// //inheritance


// const Teacher={
//     makeVideo:true
// }
// const TeachingAssintant={
//     isAviable:false,
// }
// const TASupport={
//     makeAssigmnet:'js Assigmnet',
//     fullTime:true,
//     __proto__:TeachingAssintant
// }
// Teacher.__proto__=TASupport;


// //mordern syantax
// Object.setPrototypeOf(TeachingAssintant,Teacher)

let anotherUserName="Roshan         "
String.prototype.trueLength=()=>{
    // console.log(`${this.name}`);
   console.log(` true lenagth${this.trim().length}`);
}
anotherUserName.trueLength()
"Roshan".trueLength()