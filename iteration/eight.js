const mynum=[1,2,3,4,5,6]


let intialValue=1;
let sumofArray=mynum.reduce(function(accumulator,currentValue){
    console.log(`accumator is ${accumulator} and curr val ${currentValue}`);
    return accumulator*currentValue;
},intialValue)
const myTotal=mynum.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);
console.log(sumofArray);//output 6


const shoppingCart=[
    {
        itemName:"js course",
        price:9992
    },
    {
        itemName:"Python",
        price:999
    },
    {
        itemName:"web development",
        price:5000
    },
    {
        itemName:"Android  App Development",
        price:7899
    },
       
]
let totalPriceOfItemsInTheShoppingCart=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(totalPriceOfItemsInTheShoppingCart);
