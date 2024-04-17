// // // const name = "Kunal"
// // const surName = "Tajne"

// // const total ="My name is Kunal:My surname is Tajne"

// // const totalNew = total.replace('Kunal', 'KT')

// // // console.log(totalNew)

// // const currNumber = new Number(100)

// // const min = 10;
// // const max = 100;

// // // console.log(Math.floor((Math.random() * (max - min) + 1) + min))

// // let myDate = new Date(2024,11,23) //yyyy-mm-dd //dd-mm-yyyy
// // // console.log(myDate.toDateString()) 

// // const myArr = [0,1,2,3,4,5,6]

// // const myArr2 = [7,8,9]


// // const newArray = [...myArr, ...myArr2]
// // console.log(newArray);

// // console.log(Array.of(newArray, myArr))

// // const newNum = Symbol()

// // const user = {
// //     [newNum]: "Kunal",
// //     surname:"Tajne"
// // }

// // console.log(user.surname)

// // user.getSurname = function()
// // {
// //     console.log(`My Surname is ${this.surname}`);
// // }

// // console.log(user.getSurname());


// // const user1 = {}

// // user1.name = "Vrushali"
// // user1.surname = "Tambat"

// // console.log(user1)

// // const obj1 = {
// //     name : "kunal",
// //     surname : "Tajne"
// // }

// // const {name:firstName} = obj1

// // console.log(firstName)


// // function myFunc (getName = "KT")
// // {
// //     console.log(`my Name is ${getName}`)
// // }

// // const currFunc = (item) => 
// // {
// //     console.log(item)
// // }

// // currFunc(1)

// // const myArray2 = [1,2,3,4,5,6]


// // ((name) => {
// //     console.log(`${name}`)
// // })("Hello");

// // (function chai ()
// // {
// //     console.log("Hello 2");
// // })();


// const num = [10, 11, 12,13,14,15]
// // num >= 5 ? (num >= 11? console.log("Inside"):console.log("False")) : console.log("True")

// // // for(const i of num)
// // // {
// // //     console.log(i)
// // // }

// // function printMe(item)
// // {
// //     console.log(item);
// // }

// // num.forEach((item, index, arr)  => {
// //     console.log(item, index, arr);
// // })

// // const newArray = []

// // const values = myNumArray.forEach((num) => 
// // {
// //     if(num > 5)
// //         return newArray.push(num)
// // })

// // console.log(newArray);

// const values = myNumArray.filter((num) => 
// {
//     return num > 5
// })

// console.log(values);


// const products = [
//     {name:"Kunal",
//     talent:"Tech"
// },
// {name:"Vrushali",
// talent:"Mots"
// },
// {name:"Mots",
//     talent:"Mots"
// }


// ]

// const val = products.filter((item) => item.talent === "Mots")

// console.log(val);

// const val2 = products.map((item) => {
    
// //     item.talent = "Huhu"
// //     return item;
// // })

// // console.log(val2);

// const myNumArray = [1,2,3]

// const sumArray = myNumArray.reduce((acc, currVal) => {

//     return acc + currVal

// }, 0)

// console.log(sumArray)

const shoppingCart = [

    {
        price : 199
    },
    {
        price : 299
    },
    {
        price : 399
    },
    {
        price : 499
    },

]


shoppingCart.forEach((item) => console.log(item))
// console.log("Iteration / Operation on cart item Using For Each :",cartTotalF);

const cartTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log("Cart Total Using Reduce :",cartTotal);

const cartTotal2 = shoppingCart.map((item) => {

    return item.price * 2
})
console.log("Operation on cart item Using Map :",cartTotal2);

const cartTotal3 = shoppingCart.filter((item) => (item.price > 299))
console.log("Operation on cart item Using filter :",cartTotal3);


