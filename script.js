function lacakPaket() {
    let resi = document.getElementById("resiinput").value;
    let hasil = document.getElementById("hasilTracking");

    if (resi.trim() === "") {
        hasil.innerHTML = `
            <span class="text-danger fw-semibold">
                Nomor resi wajib diisi!
            </span>
        `;
    } else {
        hasil.innerHTML = `
            Paket dengan nomor resi
            <strong>${resi}</strong>
            sedang diproses dan dalam perjalanan.
        `;
    }
    let modal = new bootstrap.Modal(
        document.getElementById("trackingModal")
    );

    modal.show();
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#pesanReguler form");
    form.addEventListener("submit", function (e) {
        e.preventDefault(); 
        alert("Pesanan berhasil dibuat!");
        form.reset();
        let modal = bootstrap.Modal.getInstance(
            document.getElementById("pesanReguler")
        );
        modal.hide();
    });
});

document.addEventListener("DOMContentLoaded", function () {

    const kurirForm = document.getElementById("formKurir");

    if (kurirForm) {

        kurirForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const nama = document.getElementById("namaKurir").value.trim();
            const telepon = document.getElementById("teleponKurir").value.trim();
            const alamat = document.getElementById("alamatKurir").value.trim();

            if (nama === "" || telepon === "" || alamat === "") {
                alert("Semua data wajib diisi!");
                return;
            }

            const container = document.getElementById("kurirContainer");

            container.innerHTML = `
                <div class="text-center py-4">
                    <h3 class="text-success mb-3">
                        Pendaftaran Berhasil
                    </h3>

                    <p class="text-secondary">
                        Terima kasih <strong>${nama}</strong>.<br>
                        Data Anda telah diterima dan sedang diproses oleh tim JekLog.
                    </p>

                    <button
                        class="btn btn-primary mt-3"
                        onclick="location.reload()">
                        Daftar Lagi
                    </button>
                </div>
            `;
        });

    }

});