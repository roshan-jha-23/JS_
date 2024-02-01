//arrays
const myArr=[0,1,2,3,4,5]
const myHeros=["shaktiman","ironman","superman","batman"];
const myarr2=new Array(1,2,3,4);
console.log(myArr[1])

//Arrays Methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop()


// // myArr.unshift(8)//ye laga dega at first place
// myArr.shift();//ye hata dega pehla element

// console.log(myArr.includes(9))

// console.log(myArr.indexOf(4))

// const newArr=myArr.join()


// console.log(myArr);
// console.log(newArr)

// ;

//slice,splice
console.log("A",myArr);
let sliced=myArr.slice(2,4);//that 4 is not included here 
let spliced=myArr.splice(2,4);//that 4 is not included here and it manipulates the original array.
console.log("B",sliced);
console.log("c",myArr);
//A [ 0, 1, 2, 3, 4, 5 ]
// B [ 2, 3 ]
// c [ 0, 1 ]