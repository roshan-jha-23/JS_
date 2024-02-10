class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`User ${this.username} is logging in.`);
    }

}

class  Admin extends User {
     constructor(username,email,password) {
        
         super(username);
        this.email = email;
        this.password = password;
       
     }
     addCourses(){
        console.log( `Admin ${this.username} has added new courses`);
     }
}

const chai=new Admin("Roshan","xyz@gmail.co0","1234")
console.log(chai.addCourses());

const masalaChai=new User("Roshan");

masalaChai.logMe();
chai.logMe()

console.log(typeof User," ", typeof Admin);
console.log(chai instanceof Admin);