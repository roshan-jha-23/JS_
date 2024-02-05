// const coding=["js","ruby","java","python","cpp"]

// const values=coding.forEach((item)=>{
//     console.log(item);
// })
// console.log("Values: ",values)

const  arr=[1,2,3,4,5,6,7,8,9,10];

// const ans=arr.filter((num)=>num>4);//without scope yaha maan liya jata hai return hai
// const ans1=arr.filter((num)=>{
//     return num>4
// });//with scope appko return lagana padega boss but yaha mana nahi kjata hai aapko explicitly batana padega 

// console.log(ans);
// console.log(ans1);

const newNums=[]

arr.forEach((element) => {
    if(element>4){
       newNums.push(element);
    }
});
console.log(newNums);

const books = [
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    publish: "1925",
    edition: "First Edition",
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Classic",
    publish: "1960",
    edition: "Revised Edition",
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publish: "1937",
    edition: "Special Collector's Edition",
  },
  {
    title: "1984",
    genre: "Dystopian",
    publish: "1949",
    edition: "Original Edition",
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publish: "1813",
    edition: "Anniversary Edition",
  },
  {
    title: "The Catcher in the Rye",
    genre: "Coming-of-age",
    publish: "1951",
    edition: "Modern Classics Edition",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    publish: "1997",
    edition: "Illustrated Edition",
  },
  {
    title: "The Lord of the Rings",
    genre: "Fantasy",
    publish: "1954-1955",
    edition: "Boxed Set",
  },
  {
    title: "The Da Vinci Code",
    genre: "Mystery",
    publish: "2003",
    edition: "Special Illustrated Edition",
  },
  {
    title: "The Girl with the Dragon Tattoo",
    genre: "Thriller",
    publish: "2005",
    edition: "Millennium Series Edition",
  },
  // Add more books as needed
];

const userBooks = books.filter((book) => book.genre === "Fantasy");
const userBooks1=books.filter((book)=>{
    return  (book.publish >="1990" || book.publish <="1999");
})
const userBooks2=books.filter((book)=>{
    return book.publish >= "1990" &&  book.genre <= "Thriller";
})
console.log(userBooks2);

