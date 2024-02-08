const user = {
  username: "Roshan",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    // console.log(`Username : ${this.username}`);
    console.log(this);
  },
};


console.log(user["signedIn"]);
// console.log(user.getUserDetails());
console.log(this);




// const promiseOne=new Promise((resolve,reject)=>{

// })

// const date=new Date()

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greetings=()=>{
        console.log( `Hello ,${this.username}!` );
    }
    return this;
}


const user1= new User("John",5,true)

console.log(user1.constructor);