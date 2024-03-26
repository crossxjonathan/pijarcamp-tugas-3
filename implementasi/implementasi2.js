const pijarFood = (harga, voucher, jarak, pajak = false) => {
    let diskon = 0;
    let tarif = 0;
    let biayaPajak = pajak ? (harga * 5) / 100 : 0;
    if (voucher === "PIJARFOOD5") {
        if (harga >= 50000) {
            diskon = (harga * 50) / 100;
            if (diskon > 50000) {
                diskon = 50000;
            }
        }
    } else if (voucher === "DITRAKTIRPIJAR") {
        if (harga >= 25000) {
            diskon = (harga * 60) / 100;
            if (diskon > 30000) {
                diskon = 30000;
            }
        }
    }
    if (jarak > 2) {
        tarif = (jarak - 2) * 5000 + 3000;
    } else {
        tarif = 5000;
    }

    const hasil = (harga - diskon + tarif + biayaPajak);

    console.log(`harga: ${harga}`);
    console.log(`Potongan: ${diskon}`);
    console.log(`Biaya Antar: ${tarif}`);
    console.log(`Pajak: ${biayaPajak}`);
    console.log(`subTotal: ${hasil}`);

}

pijarFood(100000, "PIJARFOOD5", 2, true);