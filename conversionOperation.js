let score="true"

console.log(typeof score);
console.log(typeof (score));


let valueInNumber=Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);


//"33"->33
//"33abc0"->NaN->no a no nan ka type no hi hai
//true=>1;

let isLoggedIn=null;


let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1,2,3,4...=>true 0=>false
//"",null=>false
//"abcd"=>true


let someNumber=33

// let stringValue = String(someNumber);

// console.log(stringValue);
// console.log(typeof stringValue)
//********************OPERATION************** */

let value=3;
let negValue=-value;
// console.log(negValue);

// console.log(2+3);
// console.log(2-3);
// console.log(2*3);
// console.log(2/3);
// console.log(2**3);
// console.log(2%3);

let str="Roshan"
let str1="Jha"

let str2=str + str1;
console.log(str2);

console.log("1"+2);
console.log(2+"1");
console.log("1"+2+2);//122

console.log(1+2+"2");//32

console.log(true);//true
console.log(+true);//0+true=0+1=1
console.log(+!true);//+not true=-1+1=0+1
console.log(+"");//coz " "is false;

let num1,num2,num3

num1=num2=num3=2+3

let gameCounter=100;
++gameCounter;

console.log(gameCounter);
///https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
let x = 45;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;
a=a++;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
