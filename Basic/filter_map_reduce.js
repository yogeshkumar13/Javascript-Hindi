// filter

const nums=[1,2,3,4,5,6,7,8,9,10]

const mynums=nums.filter((num)=> num>5)
    console.log(mynums)
    //output:-
             /*[ 6, 7, 8, 9, 10 ]*/

 
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
   
     const a=books.filter((c)=>c.publish==1999)
     console.log(a);
// map method se array mein de gayi value ko har number mein kuch numbe add krna ya devide ya multipiction kuch bhi..
     const mynumber=[2,5,3,4,15]
     const number=mynumber.map((num)=>num+5)
     console.log(number);//[ 7, 10, 8, 9, 20 ]

     //reduce method................................................................

     const myNumber=[2,5,3,4,15]
     const number1=myNumber.reduce((acc,add)=>acc+add,0)
     console.log(number1)//29

     //array mein object ki value ka total krna(using reduce)
     
     const shoppingCart = [
        {
            itemName: "js course",
            price: 2999
        },
        {
            itemName: "py course",
            price: 999
        },
        {
            itemName: "mobile dev course",
            price: 5999
        },
        {
            itemName: "data science course",
            price: 12999
        },
    ]

    const totalpay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
    console.log(totalpay); //22996 total amount aa jyega..