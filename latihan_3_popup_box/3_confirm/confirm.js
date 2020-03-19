// confirm('Apakah kamu yakin');

// var tes = confirm('Apakah anda yakin !!');
// alert(tes);

// var tes = confirm('Apakah anda yakin !!');
// if (tes == true) {
//     alert('Anda menekan OK!');
// } else {
//     alert('Anda menekan CANCEL!');
// }

alert('Selamat datang');
var lagi = true;

while (lagi) {
    var nama = prompt('Masukan nama anda');
    alert('Halo ' + nama);

    lagi = confirm('Coba lagi');
}

alert('Terima kasih');