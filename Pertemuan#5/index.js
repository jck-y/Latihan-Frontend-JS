//Rest parameter & spread operator
//Rest
// const penjumlahanArray = (a,b,c)=>{     //Tanpa Rest parameter
//     const array=[a,b,c];
//     let total= 0
//     array.forEach((item)=>{
//         total += item;
//     });
//     console.log(total);
// };
// penjumlahanArray(1,2,3)

// const penjumlahanArray1 = (...a)=>{     //Dengan Rest parameter
//     let total= 0
//     a.forEach((item)=>{
//         total += item;
//     });
//     console.log(total);
// };
// penjumlahanArray1(3,5,43,324,1)

//Spread
// let ar1 = [1,2,3,4,5];
// console.log(...ar1)
//     //1. duplikasi array
//     let ar2 = [...ar1];
//     console.log(ar2)
//     ar1.push(6);
//     console.log(`array 1 = ${ar1}`)
//     console.log(`array 2 = ${ar2}`)
    
    //2. menggabungkan array
    // let a1 = [1,2,3]
    // let a2 = [5,6,7]
    // let a3 = [8,9,10]
    // let gabunganA = [...a1,...a2,...a3];
    // console.log(gabunganA)

//Pada Object
let john ={
    fullName: "john",
    age: 30,
    address: "manado",
};
//Duplikasi objek
let student = {...john}
john={...john, job:"teacher"};
console.log(john)
//menggabungkan objek
let obj1 = {a:1,b:2};
let obj2 = {c:3,d:4};
let kombinasiOBJ={...obj1, ...obj2};
console.log(kombinasiOBJ)