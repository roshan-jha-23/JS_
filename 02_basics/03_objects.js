//single ton->apne tarah ka ek hi object hamesha constructor se banta hai
//object.create
//object literals

const mySym=Symbol("aeemeraSymbolhai");

const JsUser={
    name:"Roshan",
    "full name":"Roshan Jha",
    [mySym]:"my symbol value 1",//this is the way you add prop of symbol []. 
    age:22,
    location:"Kolkata",
    email:"rroshan@gx.com",
    isLoggedIn:false,
    lastLoginDays:['monday','tuesday']
}
// console.log(JsUser);
// console.log(typeof JsUser);
// console.log(JsUser.age);
// console.log(JsUser["age"]);//string ki tarah lo

// //symbol can be use in object by [mySym].  

// // console.log(JsUser."full name");//it gives error
// console.log(JsUser["full name"]);//hence this is better way.
// console.log(typeof JsUser["mySym"]);//this will return string but i wanted  to get Symbol type so used below code
// console.log( typeof JsUser[mySym]);

//updATING 
// JsUser.name="John";
// Object.freeze(JsUser);//after this u cannot change!
// JsUser.email="Roshan@chatgpt.com";//this will not reflect
// console.log(JsUser);
JsUser.greeting = function () {
  console.log("hello i am a js user");
};
console.log(JsUser.greeting());


JsUser.greeting2 = function () {
  console.log(`hello i am a js user,${this.name}`);
};

// Call the function without logging its result
JsUser.greeting();
JsUser.greeting2();

