// // let a=10;
// // const b=20;
// var c=300;
// if(true){
//     console.log("Inside If Block");
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }
// var c = 304;
// // console.log(a);
// // console.log(b);
// console.log(c);//ye to hona bhi nahi chaiye , kyu ki scope of variable is limited to the block in which it is declared.


// //node ka globalscope and brosrser ka alqg hota hai

function one(){
    const username="Roshan"

    function two(){
        const website="YT"
        console.log(`${username} is using ${website}`);
    }
    // console.log(website)
    two()
}
// one()
//scope ka kahani same as ice cream wala chote baache bado se ice cream le sakte hai but koi bada agar chote se ice cream lele to ye galat baat hai.

//
if(true){
    let x=5;
    if(x===5){
        let y=6;
        console.log('x is equal to',x,'and y is ',y);
    }
    // console.log(y); yaha error dega
}
// console.log(x); yaha error dega out of scope 



//*************************Interstinhg */
console.log(addone(5));
function addone(num){
    return num+1;
}



const addTwo=function(num){
    return num+2;
}
addTwo(7);//yaha hamlog isko early aacess nhai kar paa rahe hai but one ke case mein kar paa rahe thee 
// ReferenceError: Cannot access 'addTwo' before initialization y erroer milega
