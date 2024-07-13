 new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log("Async task without then");
        resolve();
    }, 1000)
     
 }).then(function () {
    //  console.log("promise consumed");
 })


 // second promise with parameters
//  new Promise(function(resolve, reject){
//      setTimeout(function () {
//          let error = false;
//          if (!error) {
//              resolve({username: "Rajneesh kumar", email: "admin@email.com"})
//          } else {
//              reject("ERROR : Something Went Wrong")
//          }
         
//     }, 1000)
     
//  })
// .then( (user) => {
//     console.log(user);
//     return user.username;
// })
// .then((username) => {
//      console.log(username);
// })
// .catch((err) => {
//      console.log(err);
//  })

// promises with async and await

let promiseThree = new Promise(function(resolve, reject){
     setTimeout(function () {
         let error = false;
         if (!error) {
             resolve({username: "Rajneesh kumar", email: "admin@email.com"})
         } else {
             reject("ERROR : Something Went Wrong")
         }
         
    }, 1000)
     
 })

async function promiseConsume() {
    try {
    let response = await promiseThree;
        console.log(response.email);
        
        
    } catch (error) {
        console.log(error);
    }
}
 

// promiseConsume();


async function getAllusers() {
   try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json()
//    console.log(data);     
   } catch (error) {
    console.log("ERROR :", error);
   }
}

getAllusers();


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {    
        return response.json();
    })
    .then((res) => {
        // console.log(res);
    })
    .catch((error) => {
        console.log("ERROR : ", error);
    })



// constructor function

function objCopy(username, age, isLogIn) {
    this.username = username;
    this.age = age;
    this.isLogIn = isLogIn;

    return this;
}

const u1 = new objCopy("Rajneesh", 27, true);
const u2 = new objCopy("kumar", 25, false);


console.log(u1.username);
console.log(u2.age);