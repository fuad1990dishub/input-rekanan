document.getElementById("formData").addEventListener("submit", function(e){
    e.preventDefault();

    let nama = document.getElementById("nama");
    let link = document.getElementById("link");
    let errNama = document.getElementById("errNama");

    let valid = true;

    nama.classList.remove("error");
    errNama.innerText = "";

    if(nama.value.trim() === ""){
        nama.classList.add("error");
        errNama.innerText = "Maaf, Nama lengkap harus di inputkan";
        valid = false;
    }

    if(link.value && !link.value.includes("drive.google.com")){
        alert("Link harus Google Drive");
        valid = false;
    }

    if(valid){
        if(link.value){
            window.location.href = link.value;
        } else {
            alert("Data berhasil disimpan");
        }
    }
});
