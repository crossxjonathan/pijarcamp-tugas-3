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
// // nama variable yang bernama cekhari ini akan menghubungkan function dengan menggunakan async yang memiliki parameter day
// const cekhari = async (day) => {
//     try {
//         // variabel result akan memproses sambil menunggu hasil dari promise dari cekHariKerja dengan menggunakan await
//         const result = await cekHariKerja(day);
//         // jika value adalah hari kerja, maka akan mengeluarkan output seperti ini
//         console.log(result + " adalah hari kerja");
//     } catch (error) {
//          // jika value adalah bukan hari kerja, maka akan mengeluarkan output seperti ini
//         console.log(error.message);
//     }
// };

// cekhari('senin');// tempat untuk menampung nilai / value dari pengecekan

// ============================================================

// // nama variable adalah cekhari yang memiliki parameter day akan mengambil data dari cekHariKerja
// const cekHari = (day) => {
//     cekHariKerja(day)
//     // kemudian bila hasil adalah hari kerja, maka akan mengeluarkan output ini
//         .then(hasil => {
//             console.log(hasil + " adalah hari kerja.");
//         })
//         // bila hasil bukan hari kerja, maka catch akan menangkap error berupa message
//         .catch(error => {
//             console.log(error.message);
//         });
// };

// cekHari('senin');// tempat untuk menampung nilai / value dari pengecekan
