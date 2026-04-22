document.getElementById("formData").addEventListener("submit", function(e){
    e.preventDefault();

    const data = {
        nama: document.getElementById("nama").value,
        nik: document.getElementById("nik").value,
        usaha: document.getElementById("usaha").value,
        npwp: document.getElementById("npwp").value,
        telepon: document.getElementById("telepon").value,
        alamat: document.getElementById("alamat").value,
        link: document.getElementById("link").value
    };

    fetch("https://script.google.com/macros/s/AKfycbx4kMUlfH831nmur68338T37rNSXsWVqhTCmRSf-ZFTRiGNkH20DUAP4edWIt8qMv3M/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        alert("Data berhasil disimpan ke Google Sheets");
        document.getElementById("formData").reset();
    })
    .catch(err => {
        alert("Gagal menyimpan");
        console.error(err);
    });
});
