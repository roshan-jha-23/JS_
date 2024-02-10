class User{
    constructor(name){
       this.name=name;
    }
    logMe(){
        console.log(`${this.name} is username`);
    }
   static giveUniqueId(){
        console.log(Math.random()+"-+-");
    }
}
const roshan=new User("roshan")
// console.log(roshan.giveUniqueId());
class Teacher extends User{
    constructor(name,email){
     super(name);
     this.email=email;
    }
}
const iphone= new Teacher("iphone", "iphone@gmail.com");
iphone.logMe();