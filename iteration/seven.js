const myNum=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

//map

// const newNums=myNum.map((num)=>num+10)
// const newNums4=myNum.map((num)=>{
//     return num+10
// })
// console.log(newNums);
// console.log(newNums4);


const newNum=myNum
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=50)//isko kehte hai chaining

console.log(newNum);                


