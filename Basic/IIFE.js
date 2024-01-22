// generaly hum function ko kuch is type se declear krte hai-

function chai(){
    console.log("Akha")
}
chai();//Akha 

// Immediately invoked function expressions-
 (function tea(){
    console.log("village")
 })();

 (()=>{ //arrow function
    console.log("jfhe")
 })();

 ((user)=>{
    console.log(`${user}`)
 })('Gangwar')