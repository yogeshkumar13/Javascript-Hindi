"use strict"
// object pe loop lagana--(for in)..


    

const object1={
     java:".java",
     javascript:"js",
     html:"html",
     css:"css",
     python:"py",
     ruby:".rb",
    json:"json"
    }
for (const key in object1) {
     console.log(`${key} Extension ${object1[key]}`)
    }
    //output-:

        /*java Extension .java
        javascript Extension js
        html Extension html
        css Extension css
        python Extension py
        ruby Extension .rb
        json Extension json*/

// 
    const arr=["java","javascript","python"]

for (const key in arr) {
     console.log(key)
}
 //Output:-
    
     /*0
       1
       2*/

const arr1=["java","javascript","python"]

for (const key in arr) {
console.log(arr[key]) //ab vlaue bhi pirnt hongi
}

const array={
    city:"bareilly",
    District:"Bareilly",
    state:"U.P"
}
for (const key in array) {
    console.log(`${key} value is ${array[key]}`)
}
    // output:-

                /*city value is bareilly
                District value is Bareilly
                state value is U.P */