// const promisOne = new Promise((resolve, reject) => {

//     const error = false;

//     if(!error)
//     {
//         const userData = {
            
//             userName : "Kunal",
//             password: "KT",

//         }
//         resolve(userData)
//     }
//     else
//     {
//         reject("Something went wrong")
//     }
    
// })

// promisOne
// .then((userData) => {return userData.userName})
// .then((userName) => {console.log(userName)})
// .catch((error) => {console.log(error)})

// const promiseTwo = new Promise((resolve, reject) => {

//     const errorFlag = false

//     if(!errorFlag)
//     {
//         const userData ={
//             username : "Vrushali",
//             location : "New York",
//         }
//         resolve(userData)
//     }

//     else
//     {
//         reject(error)
//     }

// })

// async function consumePromiseTwo()
// {
//     const response = await promiseTwo
//     console.log(response)
// }

// consumePromiseTwo()


// fetch("https://gist.githubusercontent.com/saltukalakus/124bba04327d8e5eab605d4fb66c53b8/raw/1043e2e62df1bb6118f0d8d1b81881fa45b46cbd/sample_users_with_id.json")
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//    data.forEach((item) => {
//     if(item.user_id)
//     console.log(item.user_id);
//    })
// })
// .catch((error) => {
//     console.log(error)
// })


let myNums = [1, 2, 3, 4, 5, 6]
const myNums2 = [];
const index = 0;
const currNum = myNums.reduce((accumulator, currValue, index) => {

let value = accumulator + currValue;
console.log(index++);
myNums2.push(value)
return accumulator + currValue
}, 10)

console.log(myNums2)