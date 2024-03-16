function updateWaktuSholat(jadwal) {
    document.querySelector('.subuh').textContent = jadwal.subuh;
    document.querySelector('.dzuhur').textContent = jadwal.dzuhur;
    document.querySelector('.ashar').textContent = jadwal.ashar;
    document.querySelector('.maghrib').textContent = jadwal.maghrib;
    document.querySelector('.isya').textContent = jadwal.isya;
    document.querySelector('.imsak').textContent = jadwal.imsak; // Menambahkan waktu imsak

    const waktuSekarang = new Date();
    const waktuSekarangDetik = waktuSekarang.getHours() * 3600 + waktuSekarang.getMinutes() * 60 + waktuSekarang.getSeconds();
    let waktuSholatBerikutnya = null;
    for (const sholat in jadwal) {
        const jamMenit = jadwal[sholat].split(':');
        const waktuSholatDetik = parseInt(jamMenit[0]) * 3600 + parseInt(jamMenit[1]) * 60;
        if (waktuSekarangDetik < waktuSholatDetik) {
            waktuSholatBerikutnya = sholat;
            break;
        }
    }

    if (waktuSholatBerikutnya) {
        const jamMenitSholat = jadwal[waktuSholatBerikutnya].split(':');
        const waktuSholatDetik = parseInt(jamMenitSholat[0]) * 3600 + parseInt(jamMenitSholat[1]) * 60;
        const sisaDetik = waktuSholatDetik - waktuSekarangDetik;
        const jam = Math.floor(sisaDetik / 3600);
        const menit = Math.floor((sisaDetik % 3600) / 60);
        const detik = sisaDetik % 60;
        const waktuFormat = `${jam.toString().padStart(2, '0')}:${menit.toString().padStart(2, '0')}:${detik.toString().padStart(2, '0')}`;
        const waktuSholatNama = waktuSholatBerikutnya.charAt(0).toUpperCase() + waktuSholatBerikutnya.slice(1);
        document.getElementById('menuju-waktu-sholat').textContent = `Menuju Waktu ${waktuSholatNama} ${waktuFormat}`; // Menghapus titik dua setelah nama waktu sholat
    } else {
        document.getElementById('menuju-waktu-sholat').textContent = 'Sudah lewat waktu sholat hari ini';
    }
}

function getJadwalSholat() {
    const tanggal = new Date();
    const getYear = tanggal.getFullYear();
    const getMonth = tanggal.getMonth() + 1;
    const getDay = tanggal.getDate();

    fetch(`https://api.myquran.com/v2/sholat/jadwal/1607/${getYear}/${getMonth}/${getDay}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Response not ok');
        }
        return response.json();
    })
    .then(data => {
        const jadwal = data.data.jadwal;
        document.getElementById('jadwal-date').textContent = jadwal.tanggal;
        updateWaktuSholat(jadwal);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

getJadwalSholat();
setInterval(getJadwalSholat, 1000);
