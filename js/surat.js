function getURL(e) {
    const pageURL = window.location.search.substring(1);
    const urlVariable = pageURL.split('&');

    for (let i = 0; i < urlVariable.length; ++i) {
        const parameterName = urlVariable[i].split('=');
        if (parameterName[0] === e) { // Ubah '==' menjadi '===' untuk perbandingan yang lebih ketat
            return parameterName[1];
        }
    }
}

const nomorsurat = getURL('nomorsurat'); // Ubah 'nomorsurat' menjadi sesuai dengan nama parameter yang diharapkan

function getSurat() {
    fetch(`https://equran.id/api/surat/${nomorsurat}`)
        .then(response => response.json()) // Ubah 'Response' menjadi 'response'
        .then(response => {

            // Judul Surat
            const JudulSurat = document.querySelector('.Judul-Surat');
            const cardJudulSurat = `
            <strong>${response.nama_latin} - ${response.nama}</strong>
            <p>Jumlah Ayat: ${response.jumlah_ayat} (${response.arti})</p>
            <button class="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-btn" viewBox="0 0 16 16">
                    <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                </svg>
                Dengarkan
            </button>
            `;
            JudulSurat.innerHTML = cardJudulSurat;
            // End Judul Surat

            // Isi Surat
            const Surat = response.ayat; // Ubah 'Response' menjadi 'response'
            let isisurat = '';
            Surat.forEach( s => {
                isisurat += `
                <div class="card mb-3">
                <div class="card-body">
                    <p>${s.nomor}</p>
                    <h3 class="text-end">${s.ar}</h3>
                    <p><i>${s.tr}</i></p>
                    <p>${s.idn}</p>
            </div>
            </div>
                `;
                
            });
            const cardIsiSurat = document.querySelector('.card-isi-surat')
            cardIsiSurat.innerHTML = isisurat; // Mengisi konten ke elemen card-isi-surat
            console.log(cardIsiSurat); // Debugging: Menampilkan elemen yang dipilih dalam konsol
        });
}

getSurat();
