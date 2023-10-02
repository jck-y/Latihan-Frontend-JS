//class in JS

//Object literal
// const mobil = {
//     transmisi: 'manual',
//     bahanbakar: 'bensin',
//     mesin: 2500,
//     nyala: function(){
//         console.log(`mobil ${this.transmisi} dinyalakan`)
//     }
// }

// const mobil2 = {
//     transmisi: 'automatic',
//     bahanbakar: 'solar',
//     mesin: 6000,
//     nyala: function(){
//         console.log(`mobil ${this.transmisi} dinyalakan`)
//     }
// }
////////////////////////////////////////////////////////////////////////////////////\

//buat pakai class
class mobil{
    constructor(transmisi, bahanbakar, mesin){
        this.transmisi = transmisi
        this.bahanbakar = bahanbakar
        this.mesin = mesin
    }
    nyalakan(){
        console.log(`mobil ${this.transmisi} nyalakan`)
    }
}

// const mobil1 = new mobil('manual', 'bensin', 1500)
// mobil1.nyalakan()
// const mobil2 = new mobil('automatic', 'Solar', 4000)
// mobil2.nyalakan()
// console.log(mobil1,'\n', mobil2)

class toyota extends mobil{
    constructor(merek, warna, transmisi, bahanbakar,mesin){
        super(transmisi,bahanbakar,mesin)
        this.merek= merek
        this.warna=warna
    }
}
const agya = new toyota('aqya', 'putih', 'automatic','bensin',2000)
agya.nyalakan()
console.log(agya)