// Mencegah halaman di-scroll saat overlay tampil
document.body.style.overflow = "hidden";

// Menutup overlay
function tutup() {
    const popup = document.querySelector(".popup");

    popup.style.opacity = "0";
    popup.style.transform = "scale(0.9)";

    setTimeout(() => {
        popup.style.display = "none";
        document.body.style.background = "transparent";
        document.body.style.overflow = "auto";
    }, 300);
}

// Mencegah klik kanan (opsional)
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
});

// Mencegah tombol F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U (opsional)
document.addEventListener("keydown", function(e){

    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "U")
    ) {
        e.preventDefault();
    }

});