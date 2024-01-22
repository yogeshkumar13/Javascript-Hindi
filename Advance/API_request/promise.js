 const promiseOne= new Promise(function(resolve, reject) {
    //do an async  task to resolve
    // Database call, cryptography, newtwork

    setTimeout(function() {
        console.log('Async task complete'); 
    },2000)

 })
 promiseOne.then(function(){// then ka connection resolve se hai..
    console.log("Promise consumed");
 })



new Promise(function(resolve, reject) {// without kisi variable mein hold kiye huye..
    
    setTimeout(function(){
        console.log("async task 2");resolve()// yha resolve lgaya hai to .then wla bhi execute honga
    },2000)
})

.then(function(){
    console.log("async is resolved");
})

const promiseThree=new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log("task three execute");
        resolve({username:"Yogesh",email:"chaiexample@.com"})
    },2000)

})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true

    if(!error){//agar nhi hai to resolve kr do display kr do value ko..
        resolve({username:"yogesh",village:"akha",pincodeNo:24301})
    }else{
        reject('error:Something went wrong')//error deta hai..
     }
    },2000)
}) 
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{// again take the .then() its call him chaining..
    console.log(username);
})
.catch((error)=>{ 
    console.log(error)
})
.finally(()=>{//By default execute honga..
    console.log("The promise is either resolved or rejected")
})

// .catch() hamey error deta hai (agar error hongi to wrna .then() jo resolve mein mention ki hongi value display krega)
// ooper hamney error ture declear ki hai isliye (reject keyword execute honga)Something went wrong execute honga..
// agar error false kr dete hai to resolve wla execute honga..

const promiseFive =new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"javascript",password:"123"})
        }
        else{
            reject("error: javascript went wrong")
        }
    },2000)
});

async function consumepromiseFive(){
    const response = await promiseFive
    console.log(response);
}
consumepromiseFive()
  
const promiseFive1 =new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"javascript",password:"123"})
        }
        else{
            reject("error: javascript went wrong")
        }
    },2000)
});

async function consumepromiseFive1(){
    try{
    const response = await promiseFive1
    console.log(response);
}
catch(error){
    console.log(error);
}
}
consumepromiseFive1()


// How to call data with the use fetch API --
 async function getAllUsers(){
    try{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    const data = await response.json()
    console.log(data);
    }
    catch(error){
        console.log("error")
    }
 }
 getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
   .then((data)=>{
    console.log(data);
   })
   .catch((error)=>{
    console.log(error)
   })

