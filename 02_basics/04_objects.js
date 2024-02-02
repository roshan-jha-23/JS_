// const tinderUser=new Object(); ye singleton hai
// const tinderUser={}

// tinderUser.id="1_6_9_l_o_v_e"
// tinderUser.name="Love"
// tinderUser.age=25;
// tinderUser.gender='F'
// tinderUser.bio=`I am Love, the one and only love in this world.\n\n When I met someone new, I immediately fell in love with them.`
// // console.log(tinderUser);
// const regularUser={
//     email:"some@gmail.com",
//     fullname:{
//         userFullNmae:{
//             firstName:'John',
//             lastName:'doe'
//         }
//     }
// }
// console.log(regularUser.fullname?.userFullNmae.firstName);//?. isliye use kiya bcoz agar ye exist hi nahi karta ho agar than? us waqt ke liye


// //combining objects
// let combinedObj = {...tinderUser, ...regularUser};
// console.log("Combined object: ",combinedObj)

// const obj1={1:"a",2:"b"};
// const obj2={3:"a",2:"b"};
// //  const obj3={obj1,obj2}
// //  const obj3=Object.assign({},obj1,obj2)//suru mein {} dene se ek surity rehti hai ki naya object bannn jaye
// const obj3={...obj1,...obj2};//using spread operator
// console.log('Object 3 : ',obj3)
//  console.log(obj3);

//  //
//  const users=[
//     {
//         id:1,
//          name:"John"
//     },
//     {
//         id:2,
//         name:"rakesh"
//     },
//     {
//         id:3,
//         name:"Sara"
//     }
//  ]
//  console.log(users[1].name)
//  console.log(tinderUser)
//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));
//  console.log(Object.entries(tinderUser));
 

//  console.log(tinderUser.hasOwnProperty('isLogged'));
//  ********************************************************************************************************************************************************************DESTRUCING of Objects**********************


const course={
    coursename:"js in hindi",
    price:"999",
    duration:"6 months",
    courseInstructor:"hitesh sir"
}
// console.log(course.courseInstructor);

// const {courseInstructor}=course

// console.log(courseInstructor);

const { courseInstructor: instructor } = course;
console.log(instructor);

//  { JSON
//     "name":"roshan",
//     "age":"24",
//     "course":"hey there"
//  }

// [
//     {},
//     {},
//     {}
// ]
