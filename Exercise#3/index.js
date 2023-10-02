//===============================================================ARRAY========================================================//
// //NO.1
// // let people = ["Greg", "Mary", "Devon", "James"];
// // for (let i = 0; i < people.length; i++) {
// //     console.log(people[i]);
// // }


// //NO.2
// let people = [
//     {
//         id: 1,
//         name:'Greg',
//     },
//     {
//         id: 2,
//         name: 'Mary',
//     },
//     {
//         id: 3,
//         name: 'Devon',
//     },
//     {
//         id:4,
//         name: 'James',
//     },
// ];
// // people.forEach(function(item){
// //     console.log(item.name);
// // })

// //NO.3
// people.shift()
// // people.forEach(function(item){
// //     console.log(item.name);
// // })

// //NO.4
// people.pop()
// // people.forEach(function(item){
// //     console.log(item.name);
// // })

// //NO.5
// people.unshift({id: 0, name: "Matt"});
// // people.forEach(function(item){
// //     console.log(item.name);
// // })

// //NO.6
// people.push({id: people.length-1, name: "jacky"});
// // people.forEach(function(item){
// //     console.log(item.name);
// // })

// //NO.7
// for (let i = 0; i < people.length; i++) {
//     if (people[i].name === 'Matt') {
//         // console.log(people[i].name);
//     }
//     if (people[i].name === 'Mary') {
//         // console.log(people[i].name);
//         break;
//     }
// }

// //NO.8
// // let orang = people.slice(2,4);
// // orang.forEach(function(item){
// //     console.log(item.name);
// // })

// //NO.9
// people.splice(1, 2, {id: 5, name: 'Elizabeth'}, {id: 6, name: 'Artie'});
// let names = [];
// people.forEach(function(item){
//     names.push(item.name);
// });
// console.log(names);

// //No.10
// let withBob = people.concat({ id: people.length + 1, name: 'Bob' });
// withBob.forEach(function (item) {
//     console.log(item.name);
// })


//===============================================================OBJECT========================================================//
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
//NO.1
programming.languages.push("Go");
// console.log(programming);
//NO.2
programming['difficulty']=7
// console.log(programming)
//NO.3
delete programming.jokes;
// console.log(programming)
//NO.4
programming.isFun=true;
// console.log(programming)
//NO.5
programming.languages.map(function(value,index){
    console.log(index+"-"+value);
})