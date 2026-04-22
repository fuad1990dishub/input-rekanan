document.getElementById("formData").addEventListener("submit", function(e){
    e.preventDefault();

    const data = {
        nama: document.getElementById("nama").value,
        nik: document.querySelectorAll("input")[1].value,
        usaha: document.querySelectorAll("input")[2].value,
        npwp: document.querySelectorAll("input")[3].value,
        telepon: document.querySelectorAll("input")[4].value,
        alamat: document.querySelector("textarea").value,
        link: document.getElementById("link").value
    };

    fetch("https://script.google.com/macros/s/AKfycbx4kMUlfH831nmur68338T37rNSXsWVqhTCmRSf-ZFTRiGNkH20DUAP4edWIt8qMv3M/exec", {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        alert("Data berhasil disimpan ke Google Sheets");
    })
    .catch(err => {
        alert("Gagal menyimpan");
        console.log(err);
    });
});
