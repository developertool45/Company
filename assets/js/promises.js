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
}
objCopy.prototype.printUsername = function () {
    console.log(`username of objcopy is ${this.username}`);
}
objCopy.prototype.printUserAge = function () {
     console.log(`UserAge of objcopy is ${this.age}`);
}
const u1 = new objCopy("Rajneesh", 27, true);
const u2 = new objCopy("kumar", 25, false);


//  u1.printUserAge();


let objOne = {
    username: "rajneesh",
    age: 27,
    location: "dehradun",
    naresh: function () {
        return console.log(`username is ${this.username}`);
    }
}


class myProgram{
    constructor(myname, age, day) {
        this.myname = myname;
        this.age = age;
        this.day = day;
    }
}


function Program(myname, age, day){     
    this.myname = myname;
    this.age = age;
    this.day = day; 
    
    return this;
}


let data = new myProgram("Naresh kumar", 25, "monday");

let data1 = new Program("Naresh", 25, "monday");
let data2 = new Program("Ajay ji", 24, "monday");

// console.log(data1);
// console.log(data2);
// console.log(data1.myname);
// console.log(data2.age);




let naresh = {
    yourName : "Naresh and Ajay",
    age: 26, 
    
}

let ajayji = {
    Name : "Ajay",
    age : 24,
    village: "kuakhera",
    tai: "naresh ki mummy",
    
}

naresh.__proto__ = ajayji;    

// Object.setPrototypeOf(naresh, ajayji);

// console.log(naresh.Name);

//===============this and call ========================//

function Setusername(username) {
    this.username = username;
}

function createUser(username, email, password) {
    Setusername.call(this, username)
    this.email = email;
    this.password = password;
}


const usr1 = new createUser("Rajneesh kumar", "email@gmail.com", "Raj123");
console.log(usr1);