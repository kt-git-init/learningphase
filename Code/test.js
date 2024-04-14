const name = "Kunal"
const surName = "Tajne"

const total ="My name is Kunal:My surname is Tajne"

const totalNew = total.replace('Kunal', 'KT')

// console.log(totalNew)

const currNumber = new Number(100)

const min = 10;
const max = 100;

// console.log(Math.floor((Math.random() * (max - min) + 1) + min))

let myDate = new Date(2024,11,23) //yyyy-mm-dd //dd-mm-yyyy
// console.log(myDate.toDateString()) 

const myArr = [0,1,2,3,4,5,6]

const myArr2 = [7,8,9]


const newArray = [...myArr, ...myArr2]
console.log(newArray);

console.log(Array.of(newArray, myArr))