//How to declear function- 

function  hello (){
     console.log("Yogesh kumar")
}
hello()

function Sum(a,b){// Sum of two number
     console.log(a+b)
    }
 Sum(50,20)


function calculateValue(...num1){
    return num1
}
console.log(calculateValue(400,500,600))


// object ko function mein kese pass krte hai aur kase use-
// Exam-1
const user={
    username:"yogesh",
    price:149
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)

// Exam-2

const user2={
    username:"Yogesh kumar",
    location:"Baheri",
    age:23,
    pincode:243201
}
function  yogeshdata(object){
    console.log(`username is ${object.username} and location is ${object.location} and age ${object.age} and pincode ${object.pincode}`)
}
yogeshdata(user2)

// function mein array ko kase pass kete hai

const array=[200,300,400]
 function secondvalue(getarray){
    return getarray[2]
 }
console.log(secondvalue(array))
















