//Nullish_coalesing_opertor(??)...

let value;
value = 5 ?? 10
console.log(value);//5 jo pahle value hongi wahi dispaly kr dega..

let value1;
value1 = null ?? 12
console.log(value1);// 12 ya to null ya koi number dispaly ke dega..

let value2;
value2 = undefined ?? 20 
console.log(value2);// 20 


let value3;
value3 = undefined ?? 20 ?? 13
console.log(value3);// 20 jo phle vakue hongi ahi print hongi aage kuch bhi ho..

let value4;
value4 = undefined ?? null
console.log(value4);// null

let value5;
value5 = null ?? undefined
console.log(value5)// undefined
