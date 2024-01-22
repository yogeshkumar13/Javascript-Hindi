const Obj={ //declear object in javascript
    name:"Yogesh",
    Location:"Bareilly",
    gmail:"yk76430@gmail.com"
}


const MySym=Symbol("Key1")

const User={
    name:"Yogesh",
    [MySym]:"My Name is Yogesh"
}
console.log(User[MySym])

User.name="Yogesh"
Object.freeze(User) //Kisi bhi chiz ko freeze krna to this way.

const obj1={
    name:"kumar",
    email:"yogeshakha@gmailbareilly.com",
}
 
obj1.email="yogeshKH@gmail.com"
Object.freeze(obj1)

 // Two obj mein de gyi value ko assign krna.

const objects1={1:"a",2:"b"}
const objects2={3:"c",4:"d"}
const objects3=Object.assign(objects1,objects2)
//console.log(objects3)

const TinderUser ={}

TinderUser.id="CS"
TinderUser.name="kurmi"
TinderUser.isLoggedIn=false
console.log(Object.keys(TinderUser));
console.log(Object.values(TinderUser));
console.log(Object.entries(TinderUser));

