const desp=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(Math.PI);
// Math.PI=5;
// console.log(Math);
console.log(desp);

// const newobj=Object.create(null) 


const chai={
    name:"giner chai",
    price:250,
    isAvialble:true,


    orderChai:function(){
        console.log("chai nai bani");
    }

}
console.log(Object.getOwnPropertyDescriptor(chai,"price"));

// Object.defineProperty(chai,"price",{
//     enumerable:false,
//     writable:false,
//    
// })
chai.price=300;
console.log(chai.price);


for (const [key,value] of Object.entries(chai)) {
    if(typeof value !=="function"){
    console.log(key+" : "+value);
    }
}
