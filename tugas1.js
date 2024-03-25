const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
}

try{
    // nama variabel result yang berisi nilai yaitu cekHariKerja yang berfungsi untuk memanggil nilai melalui string
const result = cekHariKerja('senin');

// menghandle promise menggunakan then dan catch
result
// bila resultnya adalah hari kerja, maka akan muncul output seperti ini
    .then((result) => {
        console.log(`Hari ini adalah hari ${result}`);
        console.log(result);
    })
    // namun bila bukan hari kerja, maka output muncul seperti ini
    .catch((error) => {
        console.log('Libur');
        console.log(error.message); // menampilkan pesan error
    });
}catch(error){ // untuk menangkap error itu sendiri
    console.log(error); 
}