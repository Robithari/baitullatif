function updateWaktuSholat(jadwal) {
    document.querySelector('.subuh').textContent = jadwal.subuh;
    document.querySelector('.dzuhur').textContent = jadwal.dzuhur;
    document.querySelector('.ashar').textContent = jadwal.ashar;
    document.querySelector('.maghrib').textContent = jadwal.maghrib;
    document.querySelector('.isya').textContent = jadwal.isya;
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
        document.querySelector('#jadwal-date').textContent = jadwal.tanggal;
        updateWaktuSholat(jadwal); 
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

getJadwalSholat();
