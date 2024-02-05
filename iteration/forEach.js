const coding = ["js", "python", "java", "cpp", "css"];

// coding.forEach(function (item){//call back fn ka name nai hota
//     console.log("1st "+ item +".");
// })
// coding.forEach((val)=>{
//    console.log(val);
// })

// function printMe(item){
//      console.log(item+" is a good programming language.")
// }
// coding.forEach(printMe)

// coding.forEach((item,itemIndex,itemarry)=>{
//   console.log(item,itemIndex,itemarry);
// })

const Mycoding = [
  {
    lang: "Python",
    isGood: false,
  },
  {
    lang: "java",
    isGood: true,
  },
  {
    lang: "cpp",
    isGood: true,
  },
];
 Mycoding.forEach((item)=>{
    console.log(item.lang+": "+(item.isGood ? 'Yes' : 'No'));
 })