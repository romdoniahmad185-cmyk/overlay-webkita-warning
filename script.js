// Kunci scroll saat overlay muncul
document.body.style.overflow = "hidden";

// Tutup overlay
function tutup() {

    const popup = document.querySelector(".popup");
    const website = document.querySelector(".website");

    popup.style.opacity = "0";
    popup.style.transform = "scale(0.9)";

    if (website) {
        website.style.filter = "none";
    }

    setTimeout(() => {
        popup.style.display = "none";
        document.body.style.overflow = "auto";
    }, 300);
}


// Blok klik kanan
document.addEventListener("contextmenu", e => {
    e.preventDefault();
});


// Blok shortcut developer tools
document.addEventListener("keydown", e => {

    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "U")
    ) {
        e.preventDefault();
    }

});