const clock =document.getElementById('clock')
// const clock =document.querySelector('#clock')
// let date=new Date()
// console.log(date.toLocaleTimeString());



setInterval(()=>{
    let date = new Date();
    // console.log(date.toLocaleTimeString());
     clock.innerHTML=`${date.toLocaleDateString()}<br> ${date.toLocaleTimeString()}`; 
},1000)