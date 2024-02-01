// const score=400
// console.log(score)

// const balance=new Number(1000.9808)

// console.log(typeof balance);

// console.log( balance.toString().length)
// console.log(balance.toFixed(2));


// const othernumber=123.8966

// console.log(othernumber.toPrecision(4));

// const yetAnotherNo=1000000

// console.log(yetAnotherNo.toLocaleString('en-IN'));

// const maxValue=Number.MAX_VALUE;



// ****************************MATHS****************************


console.log(Math.abs(-4));
console.log(Math.ceil(12.7));
console.log(Math.floor(12.7));
console.log(Math.round(12.7));
const randomNum=Math.random();//awlays give b/w 0 and 1;
console.log(`Random number between 0 and 1 is ${randomNum}`);
let pi=Math.PI;
console.log(Math.round(5*randomNum))
console.log(Math.pow(20,4));
// logarithm function returns the base 10 log of a number
console.log(Math.log10(1000));

const min=10;
const max=20;
const range=max-min;
const rand=(range+1)*randomNum + min ; //gives any random number from min to max
const  intRand = Math.floor(rand);
console.log(intRand);