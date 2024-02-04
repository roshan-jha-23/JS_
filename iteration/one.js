//for 
 for(let i=1;i<=10;i++){
    if(i==5){
        console.log(5+"is best no");
    }
     console.log(i); 
 }
for(let i=0;i<=10;i++){
    console.log(`the vale of outyer loop${i}`)
    for(let  j=i;j<i*i;j++){
        console.log(`inner loop ${j} and outer loop ${i}`);
    }
}
let arr=[1,2,3,4,5,6,7,8,9]
for(let i=0;i<arr.length;i++){
    let index = Math.round(Math.random() * (arr.length -1));
    console.log("element is"+arr[index]);
}
let arr2=["superman","batman","flash"]
let len=arr2.length;
for(let i=len-1;i>=0;i--){
    console.log(arr2[i]);
}

//continue and break
for(let i=1;i<=10;i++){
    if(i==5) continue;//skipped 5
    else if(i==9)break;//broke after 9 hence 9 and 10 will not printed
    else{
         console.log(i);
    }
}