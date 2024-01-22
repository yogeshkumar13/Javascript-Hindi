//if

 // true way to declear to if() condition--

    //  const score= 200
 
    //  if(score>100){
    //     const power="fly"
    //     console.log(`user power:${power}`);//user power: fly
    //  }

     const score= 200
 
     if(score>100){
        var power="fly"
        console.log(`user power:${power}`); 
     }
     console.log(`user power:${power}`);// user power:fly
                                        // user power:fly   var global scope hota hai wo scope ke bahar ki vlaue ko bhi access kr leta hai jo wrong hai
       

                                        const balance=1000
 if(balance<500){
console.log("less than 500")
 }
 else if(balance<750){

    console.log("less than 750")
 }else if(balance<900){
    console.log("less than 750")
 }
 else{
    console.log("less than 1200")
 }//  else if se humse multiple condtion check ke skte hai 

 const userLoggedIn=true
 const debitcard= true
 const googleLoggedIn=false
 const emailLoggedIn=  true

 if(userLoggedIn && debitcard){ // && statement left right mein dono check krta hai ki
    console.log("Code execute") // condition true hai truee honr pr code execute honga.
 }
 if(googleLoggedIn || emailLoggedIn){ // || (pipesign)isem ek bhi condition true hongi to code execute ho jayega..
    console.log("User Logged In") // equal hongi value to bhi code executr honga.
 }

 
  