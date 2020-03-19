var jmlAngkot = 10;
var angkotBeroperasi = 5;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' Beroperasi dengan Baik.');

    noAngkot++;
}
for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('Angkot No. ' + noAngkot + ' Sedang tidak beroperasi.')
}