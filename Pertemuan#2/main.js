// function greetings(){
//     return "hello";
// }
// console.log(greetings());

//PARAMETER ARGUMENT
// function operasiPerkalian(angka1, angka2){
//     return angka1 * angka2;
//   }
//   console.log(operasiPerkalian(2, 6))


// IIFE otomatis jalan tanpa panggil, tidak sperti function biasa yang harus dipanggil
// (function() {
//     const name = "John";
//     console.log("Hello, " + name);
//   })();

//INI ADA RETURNNYA
// var result = (function() {
//     var x = 10;
//     var y = 20;
//     return x + y;
//   })();
  
//   console.log(result); 

//CALLBACK FUNCTION
function createGreetings(name, callback) {
    const greetings = 'hello ' + name;
    callback(greetings);
}

function logGreetings(greetings) {
    console.log(greetings);
}

createGreetings('john', logGreetings);

  