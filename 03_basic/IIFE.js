//iife=>{Imidietly invoked fxn expression}
//Wrapping code in an Immediately Invoked Function Expression (IIFE) helps to prevent pollution of the global namespace. 

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()
(()=>{
  console.log("hey");
})();//always use semi colon after iife.
(function chai(name){
  console.log(name);
})("Rohan");//global scope ke pollution ko hatane ke liye iiife use kiya
console.log("hello");


