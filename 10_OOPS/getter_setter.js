class User{
    constructor(email,password){
       this.email= email;
        this.password = password; 
    }
    get email(){
        return  this._email.toUpperCase();
    }
    // get email(){
    //     return  this.email.toUpperCase();
    // } isme race value lagg jayegi
    set email(value){
        this._email=value;
    }
    get password(){
           return this._password.toUpperCase();
    }
    set password(value){
        this._password = value.toLowerCase() ;
    }
}
let user1 = new User("example@gmail.com","Password");
console.log(user1.email); // example@gmail.com
console.log(user1.password); // example@gmail.com