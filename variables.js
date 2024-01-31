const accountId=234567
let  accountEmail="rr630822@gmail.com"
var accountPassword="12345"
accountCity="kolkata"
let accountState;


// {
//     //ye scope hai
// var ye nahi samjhta tha aur usme kuch bhi variable nikal sakta ho to
// }
// accountId=2//not allowed
accountEmail="test@gmail.com";
accountPassword="21212121";
accountCity="blr";
/*
prefer not to use var
bcoz of issues in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
console.log(accountId);