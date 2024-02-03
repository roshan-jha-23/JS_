const user={
    username:"Roshan",
    price:999,
    welcomeMessage:function(){
        console.log("Welcome to our website "+this.username);//curr context banane ke liye
        console.log(this);//this curr context ki baat karta hai
    }

}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage();
console.log(this);//{} 

// function harami(){
//     let user="raja"
//     console.log(this.user);//yaha kaam nahi kar raha but object mein kar raha tha
// }
// harami();

// const chai=function(){
//   let user = "raja";
//       console.log(this.user);
// }
// chai();yaha bhi undefined hi aaya 

// const chai=()=>{
//   let user = "raja";
//       console.log(this);
// }
// chai();yaha bhi undefined hi aaya 

// const addTwo=(num1,num2)=>{
//    return num1+num2;
// }//ye explicit hai neeche wala implicit
// console.log(addTwo(4, 3));
// const addTwo=(num1,num2)=> 
// (num1+num2);//implicit return waha man liya jata hai return hai hi
const addTwo=(num1,num2)=> 
({username:"roshan"});//agar() nahi dete to undefined aata { username: 'roshan' }

console.log(addTwo(4, 3));

