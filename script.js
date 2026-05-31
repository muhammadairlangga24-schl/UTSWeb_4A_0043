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