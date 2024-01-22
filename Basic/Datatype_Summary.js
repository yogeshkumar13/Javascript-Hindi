//primtive- 

// 7 types : String,Number,boolean,Null,BigInt,Undefined,symbol.
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid)

  const bigNumber = 56555415485154841n

//Referance (Non primitive)-

//Array,Objects,Functions

const heros = ["shaktiman","naagraj","doga"]; //declear Array
let myobj={ // Declear objects
    name:"Yogesh",
    age:22,
}
 //const myfunction =function({ // Declear Function
 // console.log("Hello world")
 //})



 // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 // Stack,Heap Memory -
 // Stack(primitive dt) -primitive datatype mein stack memory use hote hai.
 // Heap(non-primitive dt) - non-primitive datatype mein heap memory use hote hai.

 let myYoutube ="yogeshgangwar"
 let anothername = myYoutube
  anothername ="dhbehje"
 console.log(myYoutube);
 console.log(anothername);

 let userOne={
   email :"yogesh@gmail.com",
   upi:"yogesh@ybl"
 }

 let userTwo =userOne

 usertwo.email ="djfndj@gmail.com"
  console.log(userOne.email);
  console.log(userTwo.email);
 