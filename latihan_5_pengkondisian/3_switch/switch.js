// var angka = parseInt(prompt('Masukan Angka'));

// switch (angka) {
//     case 1:
//         alert('Anda memasukan angka 1');
//         break;
//     case 2:
//         alert('Anda memasukan angka 2');
//         break;
//     case 3:
//         alert('Anda memasukan angka 3');
//         break;
//     default:
//         alert('Angka yang anda masukan salah');
//         break;
// }

// var calon = prompt('Masukan Pilihan Anda : \n(endi,rangga)');

// switch (calon) {
//     case 'endi':
//         alert('Anda Memilih Nomor Urut 1');
//         break;
//     case 'rangga':
//         alert('Anda Memilih Nmor Urut 2');
//         break;
//     default:
//         alert('Yang Anda Masukan Tidak Ada di Pilihan');
//         break;
// }


//Tidak menggunakan break
var item = prompt('Masukan Pilihan Anda : \n(susu,keju,apel,mangga,hamburger,alkohol)');

switch (item) {
    case 'susu':
    case 'keju':
    case 'apel':
    case 'mangga':
        alert('Makanan / Minuman sehat');
        break;

    case 'hamburger':
    case 'alkohol':
        alert('Makanan / Minuman Tidak Sehat');
        break;
    default:
        alert('Yang Anda Masukan Tidak Ada di Pilihan');
        break;
}