// class User{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     encryptPassword(){
//         return `${this.password}`.split('').map(function(char, i) {
//             return String.fromCharCode((char.charCodeAt() + 5 - i % 10));
//           }).join('');
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
//     }
// const user=new User("roshan","rakesh@gmail.xyz","roshan8787")
// console.log(user.encryptPassword());
// console.log(user.changeUsername());
//wsvjbn7553
//behind the hood

function User(username,email,password){
 this.username = username;
 this.email = email;
 this.password = password;
}

User.prototype.encryptPassword=function(){
    return `{${this.username}}-${this.password}`;
}
User.prototype.changeUsername=function(){
     return `${this.username.toUpperCase()}`;   
}
let user = new User ("John", "john@example.com", "mypass1")
console.log (user.encryptPassword()) ;
console.log (user.changeUsername()) ;