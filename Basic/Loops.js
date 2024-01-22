// // for loop
 
//print 1 to 10 number..

 for(let i=0;i<=10;i++){
   const element = i;
   if(element==5){
      console.log("5 is best number")
   }
   console.log(element);
 }

 for (let i = 0; i <=10; i++) {
    console.log(`outer loop:${i}`)
   for (let j = 0; j <=10; j++) {
       console.log(`ineer loop ${j} and inner loop${i}`)
      
   }
   
 }

 const array=["yogesh","abhi","suraj","aman"]
 console.log(array.length);
 for(let index=0; index<array.length;index++){
   const element=array[index];
   console.log(element);
 }

 // Break and continue...(keyword)

 for (let i = 1; i <=20; i++) {
   if(i==5){
      console.log(`detected is 5`)// is value ko display krne ke baad value nhi dispaly karega..
      break
      
   }
    console.log(`${i}`)   
 }
 for (let i = 1; i <=20; i++) {
   if(i==5){
      console.log(`detected is 5`)// is value ko display  krne ke baad continue value ko print  krega..
      continue
      
   }
    console.log(`${i}`)   
 }
 
 //while and do while loop.

 let index=0;
  while(index<=10){
   console.log(`${index}`);
   index=index+2
  }

  let array2=['banana','orange']

  let arr=0;
  while(arr< array2.length){
   console.log(`${array2[arr]}`);
   arr=arr+1
  }

  //do-while loop...

  let score=11

  do{
   console.log(`sccore is ${score}`);
   score++
  }
 while(score<=10)

 // for of loop. // array mein loop lagana..

 const Number=[1,2,3,4,5,6]
  for (const  num of Number) {
   console.log(num)
   } 

   const greeting="hello world"
   for (const greet of greeting) {
      console.log(greet)
      }//each of h
      // each of e
      // each of l
      // each of l
      // each of o
      // each of
      // each of w
      // each of o
      // each of r
      // each of l
      // each of d

// for in

   const num ={
      x:20,
      y:352
   }
   for(const item in num){
   console.log(num[item])
   }//20
    //352

    //Map

    const map=new Map()
    map.set('Baheri',"india")
    map.set('bareilly',"uttar pradesh")
    map.set('rampur',"uttar pradesh")
    console.log(map)// Map(3) {
                    //'Baheri' => 'india',
                    //'bareilly' => 'uttar pradesh',
                  //'rampur' => 'uttar pradesh'
                  //}
      
      // Map mein loop kase lagate hai..

    for (const [key,value]of map) {
      console.log(key,':-',value)
      
    }//  Baheri :- india
  // bareilly :- uttar pradesh
// rampur :- uttar pradesh


const object={
    name:"yogesh",
    last :"kurmi"
 }
 for (const key of object) {
    console.log(key)
 }

