// alert('Hello')


// prompt('Masukan Usia Anda: ') //bakal muncul pengingat

                                // mengeset variable
// var umur = 31
// console.log('heyy yoo usia kamu adalah ' + umur)//ada dalam console browser, mengeset variable
// alert('usia kamu adalah '+umur)

                                // cara lain set varialbe 
// const umur = 30
// tidak bisa di timpa, karena sudah paten

                                 // cara lain set varible
// let umur = 30
// console.log(umur)
//============================================================================================================


// let umur = prompt('berapa usia kamu?')
// alert('usia kamu adalah '+umur)

// let firstname = "jacky";
// let lastname = "karongkong";
// console.log(firstname+' '+lastname);
//============================================================================================================

                                 //cara memunculkan variable yang banyak $ condition
// let nama ='jacky'
// let usia
// let tinggi=180.5
// let zodiak = null //jika di switch, nilai null maka muncul 'tidak tahu', kalau ada nilai seperti di case switch maka akan muncul seperti case number yang ada di switch
// usia = 30

// let umur=5;
// let setara=umur>17 ? "anda sudah bisa nonton film" : 'keluar'; //disimpan di variable setara
// console.log(setara)

                                 //condition if-else
// if(zodiak == null){
//     zodiak = 'aries'
// }
// else{
//     zodiak = 'tidak ada'
// }

                                //switch atau sebuah case, mirip if else
// switch(zodiak){
//     case 1:
//         zodiak = 'aries'
//         break
//     case 2:
//         zodiak='saya bisa punya 2 zodiak'
//         break
//     default:
//         zodiak='tidak tahu'
//         break
// }
//===================================================================================================================
                                //FUNCTION
function salam(){
    console.log("hello world")
}
salam()


function salamuang(){
    return"uang";
}
let output =salamuang()
console.log(output)

//===================================================================================================================

                                //coding matematika :) atau operator
// let saldo1=5000
// let saldo2=5000
// const jumlah=saldo1+saldo2

// alert(`menghitung saldo1 dan saldo2 ${saldo1} + ${saldo2} hasil = ${jumlah}`)
// alert(
//     `nama saya ${nama} usia saya adalah ${usia} tinggi badan saya adalah ${tinggi} zodiak saya ${zodiak}`
// )
//====================================================================================================================


                                //array
                
// let namaOrang=['jar','bar','bakaran']
// namaOrang.push('alan','supri')//untuk add
// namaOrang.shift()//untuk menghapus yg awal
// namaOrang.pop()//untuk menghapus yg akhir
// alert(`nama orang dalam array no3 adalah ${namaOrang[2]}`)
//====================================================================================================================


                               //for loop dengan array

// const nama = ['jar','bar','bakaran']
// console.log(nama.length)//untuk mengetahui panjang dari 'nama'

// for(let i = 0; i<nama.length; i++){
//     console.log (nama[i])
// } 

                              //while
// let i=0
// while(i<10){
//     i++
//     console.log('nama saya')
// }

                             //Do While
// let i = 0
// do{
//     i++
//     console.log('nama saya')
// } while (i<30)  
//=============================================================================================

//LATIHAN 1
// let namahari = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu']
// console.log(namahari.length)
// let hari = new Date().getDay()

// for(let i = hari; i<namahari.length; i++){
//     console.log(`hari ini adalah hari ${namahari[hari-1]}`)

// }
// console.log(`hari ini adalah hari ${hari}`)
// if(hari==1){
//     console.log(`hari ini adalah hari ${namahari[0]}`)
// }
// else if(hari==2){
//     console.log(`hari ini adalah hari ${namahari[1]}`)
// }
// else if(hari==3){
//     console.log(`hari ini adalah hari ${namahari[2]}`)
// }
// else if(hari==4){
//     console.log(`hari ini adalah hari ${namahari[3]}`)
// }
// else if(hari==5){
//     console.log(`hari ini adalah hari ${namahari[4]}`)
// }
// else if(hari==6){
//     console.log(`hari ini adalah hari ${namahari[5]}`)
// }
// else if(hari==7){
//     console.log(`hari ini adalah hari ${namahari[6]}`)
// }
//==================================================================================================================

                            //APPEND DOM
//CONTOH
// console.log (document.title)//masuk ke title html 
// document.title = 'ubah title'

const body = document.body
// body.append('hello world')
// //TAMBAH h1 dan simpan dalam variable h1
// const h1 = document.createElement('h1')
// h1.textContent = 'ini adalah h1'
// body.append(h1)//buat masukin h1 ke body

// const nama=document.createElement('t')
// nama.innerHTML = '<i>jacky</i>'
// body.append(nama)
//=====================================================================================================================
 
                        //DATA SELECTOR
// document.title = 'ubah title'
// const tombol1=document.getElementById('tombol1')
// const tombol2=document.getElementById('tombol2')
// //CSS ubah desain tombol

// const ori='Klik Saya dulu'
// tombol1.textContent=ori

// tombol1.style.background='red'
// tombol1.style.fontSize='24px'
//                         //EVENT
// function gantiwarna(){
//     tombol1.style.background='aqua'
//     const popup=document.createElement('i')
//     popup.textContent='terklik'
//     popup.style.color='red'
//     body.append(popup)
// }
// function ubahtext(){
//     tombol1.textContent='awas'
// }
// function keluar(){
//     tombol1.textContent=ori
// }
//                           //TUGAS#2

// const popup=document.createElement('i')
// popup.innerHTML='<b>jacky karongkong</b>'


// const ori2 ='KLIK SAYA SAJA'
// tombol2.textContent=ori2 
// function munculkata(){
//     body.append(popup)  
// }
// function gantiwarnakeluar(){
//     popup.style.color='blue'
//     body.append(popup)  
// }
//===============================================================================================

                            //ARRAY
// //cara isi array
// //method1
// const array=['hello',1,2,'wow','2pitu' ]
// console.log(array)
// //method2
// const array1=[]
// array1[0]='in0'
// array1[1]='in1'
// array1[2]='in2'
// array1[3]='in3'
// console.log(array1.length)
// //method3
// const array2= new Array('13','14')
// console.log(array2[1])


// CEK ISI ARRAY
// const array1=['a','b','c','d',3]
// const isia = array1.includes('a') //---> isi jadi true
// if(isia){
//     const posisia=array1.indexOf('c')
//     const indexbefore = posisia - 1
//     const indexafter = posisia + 1
//     const before = array1[indexbefore]
//     const after = array1[indexafter]
//     console.log(`sebelum ${before}`)
//     console.log(`setelah ${after}`)
//     console.log(`nilai a itu ada di posisi index ke - ${posisia}`)
//     const nilaiakhirarray = array1[array1.length -1]
//     console.log(`nilai akhir adalah ${nilaiakhirarray}`)
// } else{
//     console.log ('tidak di temukan posisinya')
// }
// console.log (isia)