fetch('https://equran.id/api/surat')
    .then(response => response.json())
    .then(response => {
        // Iterasi melalui data respons dan membangun elemen HTML
        let cardsurat = "";
        response.forEach(Surat => {
            cardsurat += `
            <div class="col-lg-3 col-md-4 col-sm-12">
                <div class="card" onclick="location.href='surat.html?nomorsurat=${Surat.nomor}'">
                    <div class="card-body">
                        <h5 class="card-title">${Surat.nomor}. ${Surat.nama_latin}</h5>
                        <h3 class="card-subtitle mb-2 text-muted text-end">${Surat.nama}</h3>
                        <p class="card-text text-end">${Surat.arti}</p>
                    </div>
                </div>
            </div>`;
        });

        // Mengisi konten ke dalam elemen dengan kelas "card-surat-list"
        const listsurat = document.querySelector('.card-surat-list');
        listsurat.innerHTML = cardsurat;

        // Debug: Menampilkan elemen yang dipilih dalam konsol
        console.log(listsurat);
    });

        // Fungsi untuk menangani pencarian
        function searchSurat() {
            const searchInput = document.getElementById("searchInput").value.toLowerCase(); // Ambil nilai input pencarian dan ubah ke huruf kecil
            const suratList = document.querySelectorAll(".card-surat-list .card"); // Ambil semua surat dalam daftar
    
            suratList.forEach(surat => {
                const suratTitle = surat.querySelector(".card-title").textContent.toLowerCase(); // Ambil judul surat dan ubah ke huruf kecil
    
                // Periksa apakah judul surat mengandung teks pencarian
                if (suratTitle.includes(searchInput)) {
                    surat.style.display = "block"; // Tampilkan surat jika cocok
                } else {
                    surat.style.display = "none"; // Sembunyikan surat jika tidak cocok
                }
            });
        }
    
        // Tambahkan event listener untuk tombol pencarian
        const searchButton = document.getElementById("searchButton");
        searchButton.addEventListener("click", searchSurat);