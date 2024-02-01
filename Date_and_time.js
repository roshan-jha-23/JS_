//dates 

let myDate=new Date()
console.log(myDate.toString());
//Fri Feb 02 2024 00:44:49 GMT+0530 (India Standard Time)
console.log(myDate.toISOString());
//2024-02-01T18:14:49
console.log(myDate.toDateString());
//Fri Feb 02 2024
console.log(myDate.toTimeString());
//00:47:00 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString());
//2/2/2024, 12:48:02 AM
console.log(myDate.getFullYear());
//2024
console.log(typeof myDate);
//Object
// let myCreatedDate=new Date(2024,2,2,5,3);//yaha pe zero se start hoga 0-11 month
// let myCreatedDate=new Date("2024-02-02")
let myCreatedDate=new Date("02-02-2024")//yaha pe 1 se hi satrt hoga
console.log(myCreatedDate.toDateString());
//Sat Mar 02 2024
console.log(myCreatedDate.toLocaleDateString());
///02/03/2024
let myTimeStamp=Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));




let yetAnotherDate=new Date();
console.log(yetAnotherDate);
console.log(yetAnotherDate.getMonth()+1);
console.log(yetAnotherDate.getDate());
console.log(yetAnotherDate.getMilliseconds());



//important
yetAnotherDate.toLocaleString('default',{
    weekday:'long',
    // timeZone:'',
    year:'numeric',
    month:'long',
    day:'numeric'
});


