const promiseOne = new Promise((resolve, reject) => {
  //do an async task
  //db calls
  //cryptography,network wagera wagera
  setTimeout(() => {
  
    console.log("async task is complete");
    resolve(10); //resolving the promise with value 10
  }, 1000);
});

promiseOne.then((x) => {
  console.log("promise consumed", typeof x);
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 2000);
}).then(() => {
  console.log("Promise 2 completed");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "roshan", password: "pass" });
  }, 1000);
});

promiseThree.then(function (x) {
  console.log(x);
});

const promisefour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Roshan", password: "pass123" });
    } else {
      reject("Invalid Credentials");
    }
  }, 1000);
});

const userPass = promisefour
  .then((user) => {
    console.log(user);
    return user.password;
  })
  .then((userpass) => {
    console.log(userpass);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Finally Block Executed");
  });

const promisefive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: "John Doe", age: 35 });
    } else {
      reject("error aagya re baap");
    }
  }, 1000);
});
async function consumedPromisedFive() {
  try {
    const response = await promisefive;
    console.log(`Name : ${response.name} , Age :${response.age}`);
  } catch (error) {
    console.log(error);
  }
}
consumedPromisedFive();
// jsonplaceholder.typicode.com/users

// async  function getDataFromApi() {
//    try {
//      const response = await fetch("https://jsonplaceholder.typicode.com/users");
//      const data = await response.json();
//      console.log(data);
//    } catch (error) {
//     console.log(error);
//    }
// }
// getDataFromApi()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data)=>{
        console.log(data)
  })
  .catch((error) => {
    console.log(error);
  });

