const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "batman", "wonderwoman"];

// marvel_heros.push(dc_heros);//ararys ke andar arrays aagaya.
// //and it proves arrays kuch bhi le leta hai jaise pura array le lita.

// console.log(marvel_heros[3][1])

marvel_heros.concat(dc_heros);
console.log("Marvel Heroes: ", marvel_heros);//it will not change original array
console.log(marvel_heros.concat(dc_heros));

const all_my_heros=[...dc_heros,...marvel_heros];//isko bolte hai spread operator kaanch ki tarah jab girta hai waise hi saare elemet bikhar gaye.
console.log("All My Heros : ",all_my_heros)

const another_array=[1,2,3,4,[5,6,7],8,[6,7,[4,5]]]
const  flattened_arr=another_array.flat(Infinity);//Flattened Array :  [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 6, 7,
//   4, 5
// ]
console.log("Flattened Array : ",flattened_arr)


console.log(Array.isArray("Roshan"))
console.log(Array.from("Roshan"))
console.log(Array.from({name:"Roshan"}))//interesting

let score1=100;
let score2=120;
let score3=130;
console.log(Array.of(score1,score2,score3));