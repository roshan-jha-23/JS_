//primitive

//7 types: String,Number,Boolean,null,undefined,Symbol,BigInt


//javaScript is  Dyanamically Typed
const score=100;
const scoreValue=100.3;


const isLoggedin=false;
const OutsideTemp=null;

let userEmail;

const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id);
console.log(anotherId);
console.log(id == anotherId);//false as both of them are differnet
const bigNum= BigInt("987654321987654321");
console.log(bigNum);
//or simply
const bigNumber = 987654321987654321n;





//reference type (non primitive):


//Arrays ,Objects ,Functions

//some examples!

const heros=["spiderman","batman","superman","shaktiman","hanuman","iron_man","wonder_woman"];
console.log(heros);
let myObj={
    name:"Roshan",
    age:22,
    profession:"Software Developer",

}
const myFunction=function (){
console.log("Hello World!");
}
myFunction();

console.log(typeof bigNum);
