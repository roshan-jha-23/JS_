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

let stringValue = String(someNumber);

console.log(stringValue);
console.log(typeof stringValue)