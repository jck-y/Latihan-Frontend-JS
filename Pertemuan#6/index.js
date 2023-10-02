import hello, { fullname,num,john } from "./wow.js";
//import hello from "./wow.js"; KALO DI FILE BERBEDA
console.log(fullname)
console.log(num)
console.log(john)
hello()


//ASYNCHRONOUS
//asynchronous -> multi thread -> non blocking
// //PARAREL
// setTimeout(()=>{
//     console.log("1")
// },5000)

// console.log("2")

// setTimeout(()=>{
//     console.log("3")
// },4000);

// console.log('4')

// //CONCURENT
// //a callback
// setTimeout(() => {
//     console.log("1");
//     setTimeout(() => {
//         console.log("2");
//         setTimeout(() => {
//             console.log("3");
//             setTimeout(() => {
//                 console.log('4');
//             }, 3000); 
//         }, 3000); 
//     }, 3000); 
// }, 3000);
 
//b promise
    //buat promise
    const newPromise = new Promise((resolve, reject) => {
        if (true) { 
            resolve("berhasil");
        } else {
            reject("gagal");
        }
    });
//     //pakai promise
//         //1. then - catch
// newPromise.then((result)=>{
//     console.log(result)
// })
// .catch((error)=> console.log(error))
        //2. async - await  USAHAKAN PAKAI INI
        // const consumePromise = async () => {
        //     try {
        //         let result = await newPromise;
        //         console.log(result);
        //     } catch (error) {
        //         console.log(error);
        //     }
        // };
        
        // consumePromise();