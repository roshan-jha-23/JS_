const userEmail=[]
if(userEmail){
        console.log("user has email");
}else{
    console.log("Dont have user an email");
}
// falsy values 
// false
// 0
// null
// undefined
// ""
// -0
// NaN
// BigInt 0n

//truthy values
// true
//[]
//{}
//"0"
//'false'
//" "
//function(){}=>empty fxn
if(userEmail.length===0){
    console.log("Array is empty");
}
const emptyObj={}
if(Object.keys(emptyObj).length==0)console.log("object is empyty");
// console.log(false==0);//true
// console.log(false=="");//true
// console.log(0=="");//true

// Nullish coalescing operator(??): null undefined
//safety check for null 
// naya operator hai

// let val1;
// // val1=5??10 5
// // val1=null??10; 10
// var1=undefined ?? 15;   15
 val1=null??10??20  //pehla wala lega

console.log(val1);
// console.log(var1);


//ternary operator
//  condition? true:false;//if (conditio ==true) then true else false
 let x = 10;
 console.log(x>=80?2:4)//4


