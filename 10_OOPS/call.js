function setUserName(username){
     //complex db calls
     this.username=username
     console.log("called");
}

function createUser(username,email,password){
    setUserName.call(this,username)
    this.email=email;
    this.password=password
}



const chai=new createUser("Roshan","r90@chatgpt.com","123456")
console.log(chai);