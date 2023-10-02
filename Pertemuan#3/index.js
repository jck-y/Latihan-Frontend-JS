const nama = ['saya','dia','kamu','kita'];
const angka= [1,2,3,4,5];
const namaangka = [1,2,3,'saya','dia','kamu']

// console.log (nama);
// console.log (angka);
// console.log (namaangka);

// //ini tampilkan
// console.log(nama[3]);

// //ini cara ubah
// nama[3]='bob';
// console.log (nama[3]);
// console.log(nama.length);

// //cara cari index terakhir
// console.log(nama[nama.length-1]);
//=======================================================================================//
// //ARRAY METHOD
// //untuk ubah ke string
// console.log(namaangka.toString());
// //join
// console.log(namaangka.join(".."));
// //pop untuk hapus paling akhur
// namaangka.pop();
// console.log(namaangka);
// //shift untuk hapus paling depan
// namaangka.shift();
// //push menambahakan data di akhir
// namaangka.push("HAI");
// console.log(namaangka);
// //unshift untuk tambah data di awal
// namaangka.unshift("PERTAMA");
// console.log(namaangka);
// //tambah data di tengah, 1 maksdnya index keberapa, 0 tidak hapus index yang ada, 1 tambah nilai 1 dalam index
// namaangka.splice(1,0,1);
// console.log(namaangka);

// //SLICE
// let cemilan = ["kripik singkong", "kripik kentang", "krupuk ikan", "permen", "coklat", "kue"];
// let cemilanGurih = cemilan.slice(0, 3);
// let cemilanManis = cemilan.slice(3);
// console.log(cemilanGurih); // Output: ["kripik singkong", "kripik kentang", "krupuk ikan"]
// console.log(cemilanManis); // Output: ["permen", "coklat", "kue"]

// //CONCAT
// let gabungan = cemilanManis.concat(angka);
// console.log(gabungan);
//==========================================================================================================================

//OBJECT
// let orang={
//     firstname: 'john',
//     lastname: 'Doe',
//     age: 99,
//     isMaried: true,
//     grade:[1,2,3],
//     address:{
//         city:'manado',
//         province:'sulawesi utara',
//     },
//     //function
//     sayGreetings: function(){
//         console.log("HAIII" + this.firstname);
//     },
// };
// //cara tampilkan object diatas
// console.log(orang.firstname);
// console.log(orang.address.city);
// console.log(orang.sayGreetings());

// //cara tambah properti pada object
// orang.job = "guru";
// console.log(orang)
//========================================================================

//cara buat array berisi object
let orang = [
    {
        id: 1,
        name:'john',
    },
    {
        id: 2,
        name: 'jack',
    },
    {
        id: 3,
        name: 'rawr',
    },
];

// //forEach()
// orang.forEach(function(item){
//     console.log(item.name);
// });
// //map --- pada map bisa mengembalikan nilai
// output = orang.map(function(item){
//     return item.name
// });
// console.log(output);

// //filter() --- bisa berkondisi dan bisa mengembalikan data lebih dari 1
// output = orang.filter(function(item){
//     return item.name === 'rawr'
// });
// console.log(output);

//find()
output = orang.find(function(item){
    return item.name === 'rawr'
});
console.log(output);

