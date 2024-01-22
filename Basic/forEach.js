// forEach loop...

 const coding=["bareilly","Raipur","rampur"]
 coding.forEach(function(value){// call back function hai isliye iska name nhi hota hai.
    console.log(value);
 })

 //arrow function se array ki value acees krna..


 coding.forEach( (item) =>{
    console.log(item);
 })

 //forEach mein hum ek se zyda parameter pass kr skte hai..

 coding.forEach((val,index,arr)=>{
    console.log(val,index,arr)
 })


 //[{},{},{}]//common array ka scenario[array ke andar object].

 const array_Object=[
{
    languageName:"javascript",
    filename:"js"
},
{
languageName:"java",
filename:"java"
},
{
languageName:"ruby",
filename:".rb"

},]
array_Object.forEach((array)=>{
    console.log(array.filename);
})// array ke ander object ki value ko access krna for help foeEach loop..

//output:-

        // js
        // java
        // .rb