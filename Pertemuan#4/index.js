// //String literal

// let fullName ="jon doe";
// let age = 33;
// let address= "manado";

// //cara lama
// let kalimat1 = "hallo nama saya "+ fullName +"\numur saya "+age;
// console.log(kalimat1);
// //cara baru
// let kalimat2 = `hallo nama saya ${fullName}, umur saya ${age}`;
// console.log(kalimat2)
//===================================================================================//

//ARROW Function
//cara lama
// function salam1(nama){
//     return `hello ${nama}`
// }
// console.log(salam1("jacky"));
//cara baru
// const salam2 = (nama) => {
//     return `hello ${nama}`
// }
// console.log(salam2("karongkong"))
//===================================================================================//

//Implicit return value
// const salam2 = (nama) => `hello ${nama}`
// console.log(salam2("karongkong"))

//Pada IIFE
// let output1=(()=>`hello`)();
// console.log(output1)
// //Pada callback
// let numbers=[1,2,3,4,5];
// let output2 =numbers.map((item)=> item);
// console.log(output2);
//=================================================================================//

//Default Parameter
const salam = (nama, umur)=>{
    if(nama === undefined){
        nama = "tidak ada nama"
    }
    if (umur === undefined){
        umur = 0;
    }
    console.log(`hello ${nama} ${umur}`);
}
salam('jacky',)//kalau tidak ada nama jadi undifined
//cara lain
const salam1 = (nama = "tidak ada nama", umur = 0)=>{
    console.log(`hello ${nama}`);
};

salam1();