// var vallian = Math.random() * 30;
// var vallian = Math.floor(vallian);

// if (vallian > 17) {
//   console.log("Vallian sudah cukup umur");
//   console.log(vallian);
// } else if (vallian < 17) {
//   console.log("vallian belum cukup umur");
//   console.log(vallian);
// }

// var hari = prompt('masukan nama hari!');
// var hari = hari.toLowerCase();

// if(hari == 'senin'){
//   alert('diniyyah-diniyyah-IT-Rest-IT-IT-Rest-English-English');
// } 
// else if (hari == 'selasa'){
//   alert('Diniyyah-diniyyah-IT-Rest-english-english-rest-IT-IT');

// }
// else if (hari == 'rabu'){
//   alert('diniyah-diniyah-IT-Rest-English-English-Rest-IT-IT');

// }
// else if (hari == 'kamis'){
//   alert('IT-IT-IT-Rest-diniyah-diniyah-rest-english-english');

// }
// else if (hari == 'jumat'){
//   alert('english-diniyah-IT-Rest-Homeroom-Homeroom-Rest-IT-IT');

// }
// else{
//   alert('tidak ada hari itu');

// }

// var number = prompt('masukkan angka')
// var number = number % 2 

// if(number == 0){
//   alert('angka itu genap')
// } else if(number == 1) {
//   alert('angka itu ganjil')

// }


// switch

// var hari = prompt('masukkan hari!!');
// var mapel;

// switch (hari) {
//   case 'senin':
//     alert('hari ini belajar')

//     break;
//     case 'selasa':
//       alert('hari ini belajardsd')

//       break;

//   default:
//     alert('salahh')


// }


// var nilai = prompt('masukkan nilai');


// switch (true) {
//   case nilai < 60:
//     alert('nilai anda D (kurang)');
//     break;
//     case nilai > 60 && nilai <= 75:
//     alert('nilai anda C (Cukup)');
//     break;
//     case nilai > 75 && nilai <= 85:
//     alert('nilai anda B (Baik)');
//     break;
//     case nilai > 85 && nilai <= 100:
//     alert('nilai anda A (Ahsan)');
//     break;

//   default: 
//   alert('nilai yang anda masukkan salah');
// }


//ternary
// var nama = prompt('nama')
// var jawaban = (nama.toLowerCase() == 'kak fahmi') ? 'benar': 'salah';
// alert(`jawaban yang anda kirim : ${jawaban}`);


// nested branches

// var username = prompt('masukin user : ')
// var pass = prompt('masukkan password : ')

// if (username == 'fahmi17') {
//   if (pass == '123') {
//     alert('anda berhasil login')
//   } else {
//     alert('password anda salah')
//   }

// } else {
//   alert('tidak ada username')
// }



// var jawaban1 = prompt('apakah kak fahmi baik? A : Iya B : Salah C : Gatau')


// switch (true) {
//   case jawaban1 == 'A':
//     alert('Betul ka fahmi orang baik')
//     break;

//   default:
//     if (jawaban1 == 'B'){
//   alert('Salah, ka fahmi adalah orang baik');
  

//   }


//    else {
//     if (jawaban1 == 'C'){
//       alert('harus tau kalo ka fahmi adalah orang baik');
    
//       } else{
//         alert(`jawaban : ${jawaban1} tidak ada`);
    
//   }
// }
// }
// var jawaban2 = prompt('apakah kak fahmi baik? A : Iya B : Salah C : Gatau')


// switch (true) {
//   case jawaban2 == 'A':
//     alert('Betul ka fahmi orang baik')
//     break;

//   default:
//     if (jawaban2 == 'B'){
//   alert('Salah, ka fahmi adalah orang baik');
  

//   }


//    else {
//     if (jawaban2 == 'C'){
//       alert('harus tau kalo ka fahmi adalah orang baik');
    
//       } else{
//         alert(`jawaban : ${jawaban2} tidak ada`);
    
//   }
// }
// }
// var jawaban3 = prompt('apakah kak fahmi baik? A : Iya B : Salah C : Gatau')


// switch (true) {
//   case jawaban3 == 'A':
//     alert('Betul ka fahmi orang baik')
//     break;

//   default:
//     if (jawaban3 == 'B'){
//   alert('Salah, ka fahmi adalah orang baik');
  

//   }


//    else {
//     if (jawaban3 == 'C'){
//       alert('harus tau kalo ka fahmi adalah orang baik');
    
//       } else{
//         alert(`jawaban : ${jawaban3} tidak ada`);
    
//   }
// }
// }

// loop

//while
// var ulang = true;
// var con = 0;

// while(ulang) {
  
//   con++
//   repeat = confirm('klik ok');
// }

// alert(`kamu telah klik ok ${con} kali`);


// for

// for(var i = 0; i < 10; i++){
//   console.log(`ulang sebanyak ${i}x`)
// }

// for each

// var kelompok = [
//     'Abdurahman Ilyasa',
// 'Ammar Zahran Syafiq',
// 'Andy Taft',
// 'Arkan Naufal Ardhani',
// 'Azka Azkia Baiquni',
// 'Azka Savir Fauzie',
// 'Faris Dzu Khairil Muna',
// 'Firja Abiyu Alhilali',
// 'Haikal Al Fatih',
// 'Ihsan Ahmad Fakhriansyah',
// 'Mawaldy Adha Majid',
// 'Muhammad Al Fathi Ahyan',
// 'Muhammad Fahri Al Mauludy',
// 'Muhammad Imamussajidin',
// 'Muhammad Keenan Abigail',
// 'Naufal Azriel Al Azizy',
// 'Raihan Ksatria',
// 'Reveeno Dhirgham Putra',
// 'Rizqi Irkham Maulana',
// 'Vallian Sayoga Chandra'
// ];

// kelompok.forEach((row) => {
//     console.log(`nama anak idn : ${row}`)
// })


//o
//ob
//obj
//obje
//objec
//object
//objec
//obje
//obj
//ob
//o

// var motor = {
//     nama : "Kawasaki Ninja",
//     warna : "hijau",
//     cc : '250cc',
//     cylinder : ' dual cylinder ',
//     kerangka : {
//         jenis : 'twin tunnel',
//         berat : '10 kg',
//         bahan : 'plastisin'
//     }
// }


// function mobil(nama, warna, tahun, merek,kerangka){
//     var data = {};
//     data.nama = nama;
//     data.warna = warna;
//     data.tahun = tahun;
//     data.merek = merek;
//     data.kerangka = kerangka

//     return data;

// }
// var mobil1 = mobil(
//     'mobil curian ahmad',
//  'merah', 
//  '2004', 
//  'GT-R', 
//  kerangka = {
//     jenis : 'esaf',
//     berat : '200KG',
//     nama : 'kin',
//     species : 'manusian',
//     impor : 'tidak'
//  }
//  );

// console.log(mobil1);

// study case buatlah nama nama bus beserta datanya

function bus(nama, tujuan, kodeBus, nomorPolisi, fasilitas,tambahan){
    var data = {};
    data.nama = nama;
    data.tujuan = tujuan;
    data.kodeBus = kodeBus;
    data.nomorPolisi = nomorPolisi;
    data.fasilitas = fasilitas;
    data.tambahan = tambahan;

    return data;
}

var bus0 = bus(
    'Sinar Jaya',
    'jakarta - wonosobo',
    'sn-149',
    'AA 1213 BD',
    fasilitas = {
        makan : 'Rest area subang',
        sheat : 'sleeper shear',
        toilet : 'toilet duduk'
    },
    tambahan = [
        'ac',
        'Audio Karaoke',
        'selimut',
        'bantal',
        'televisi'
        
    ]
)
var bus1 = bus(
    'Sinar Bulan',
    'Surabaya - wonosobo',
    'sn-134',
    'AC 4923 TR',
    fasilitas = {
        makan : 'Rest area Yogyakarta',
        sheat : 'Cinema Shear',
        toilet : 'toilet Berdiri'
    },
    tambahan = [
        'ac',
        'Audio Karaoke',
        'selimut',
        'bantal',
        'Makan Siang'
        
    ]
)
var bus2 = bus(
    'Terang bulan',
    'jambi - lampung',
    'sn-24',
    'AF 0293 BG',
    fasilitas = {
        makan : 'Rest area Bakaheuni',
        sheat : 'Premier Cinema Sheat',
        toilet : 'toilet kayang'
    },
    tambahan = [
        'ac',
        'Headset',
        'selimut',
        'bantal',
        'Netflix'
        
    ]
)
var bus3 = bus(
    'Terang Banget',
    'Jakarta - bandung',
    'sn-14',
    'AY 2413 WD',
    fasilitas = {
        makan : 'Rest area sumedang',
        sheat : 'sleeper Head',
        toilet : 'toilet duduk'
    },
    tambahan = [
        'ac',
        'selimut',
        'bantal'
        
    ]
)
var bus4 = bus(
    'bulan sabit',
    'jakarta - solo',
    'sn-49',
    'WE 3403 ED',
    fasilitas = {
        makan : 'Rest area bandung',
        sheat : 'sleeper shear',
        toilet : 'toilet jongkok'
    },
    tambahan = [
        'ac',
        'makan',
        'selimut',
        'bantal',
        'stiker',
        
    ]
)
console.log(bus0,bus1,bus2,bus3,bus4)





// function siswa(nama, kelas, nis, nisn, jurusan){
//     this.nama = nama;
//     this.kelas = kelas;
//     this.nis = nis;
//     this.nisn = nisn;
//     this.jurusan = jurusan;
// }
// var andy = new siswa('masbro', '10', '203920940', '02394092', 'RPL')

// console.log(andy)

// fetch(data).then(response => response.json())
// .then(data => {
//     data.forEach(nama=> {
        
//     });
// })