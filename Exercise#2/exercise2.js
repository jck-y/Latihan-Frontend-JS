// IIFE
// const nilai=15
// const hasil = (function(bilangan) {
//     if (bilangan % 2 == 0) {
//       console.log("Bilangan " + bilangan + " adalah bilangan genap.");
//     } else {
//       console.log("Bilangan " + bilangan + " adalah bilangan ganjil.");
//     }
//     return bilangan;
//   })(nilai);
// console.log(hasil)

//CALLBACK FUNCTION
function cekGenapGanjil(bilangan, callback) {
  if (bilangan % 2 == 0) {
    callback("Bilangan " + bilangan + " adalah bilangan genap.");
  } else {
    callback("Bilangan " + bilangan + " adalah bilangan ganjil.");
  }
}
function loghasil(hasil) {
  console.log(hasil);
}
cekGenapGanjil(10, loghasil);


