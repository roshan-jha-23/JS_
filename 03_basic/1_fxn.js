function sayMyname() {
  console.log("R");
  console.log("0");
  console.log("s");
  console.log("h");
  console.log("a");
  console.log("n");
}
//  sayMyname//this is reference of the fxn
//calling the fn using ()
// sayMyname();

function addTwoNum(a, b) {
  //ye a,b parameter
  return a + b;
}
let a = addTwoNum(2, null); //yaha 2,null argument
console.log(a);
//2 intersting eight?

// function loginUserMessage(username){
//     if(username!=""  && username!=undefined){
// return `${username} just logged in`;
//     }else{
//         return "Please enter your name";
//     }

// }
function loginUserMessage(username = "Sam") {
  //here sam is default
  if (!username) {
    return "Please enter your name";
  } else {
    return `${username} just logged in`;
  }
}
// console.log(loginUserMessage("Roshan"));
// console.log(loginUserMessage("Roshan"));//sam has been overwritten

function calculateCartPrice(val1, val2, ...num1) {
  //... rest op hai
  return num1;
}
// console.log(calculateCartPrice(200,400,700,9000));

const user = {
  username: "roshan",
  password: "password",
};
function checkLoginCredential(userObj) {
  console.log(`Username is${userObj.username} and pass is ${userObj.password}`);
}
checkLoginCredential(user);
checkLoginCredential({
    username: "John",
    password:"hey"
})

const newArray=[200,300,400,5000,6000]

function returnSecodnValue(getArray){
   return getArray[1];
}
console.log(returnSecodnValue(newArray));
console.log(returnSecodnValue([100,890]));
