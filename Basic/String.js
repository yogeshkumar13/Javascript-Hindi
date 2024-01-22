const gameName=new String('yogesh')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase()); 

console.log(gameName.charAt(1)) //Kis position pr kon sa character hai ye charAt se find kr skte hai.
console.log(gameName.substring( 0,4))//kaah se kaha tk ki value chahiye hame uske liye use krte hai.

 const anotherString =gameName.slice(-5, 4)
 console.log(anotherString);
 const newStringOne ="   kumar   "
 console.log(newStringOne.trim()); // kumar(string) mein na phle gap ho na baad mein isliye use krte hai.

 const url="https://yogesh.com"
 console.log(url.replace('yogesh', 'kumar'))

 console.log(url.includes('yogesh')) // (*checkkrne ke liye value hai ki nahi)include ka humuse isliye krte hai beacuse hum 
                                       // pta kr sake string mein value hai ki nhi.
   const string="Yogesh-kumar-Gangwar"
   console.log(string.split('-'))      // string convert to array.                              