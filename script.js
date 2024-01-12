document.getElementById("showBirthdayButton").addEventListener("click", function () {
    // Mengubah properti CSS untuk menyembunyikan tombol setelah diklik
    this.style.display = "none";

    // Menghilangkan class "hidden" pada elemen dengan id "birthdayMessage"
    document.getElementById("birthdayMessage").classList.remove("hidden");
});

function goToNewPage() {
    // Show the new page content
    document.getElementById("newPageContent").classList.remove("hidden");
    
    // Hide the birthday message and the button
    document.getElementById("birthdayMessage").classList.add("hidden");
    document.getElementById("newPageButton").style.display = "none";
}
function changeText() {
    document.getElementById('wishes').classList.remove('hidden');
    document.getElementById('btn').classList.add('hidden');
}

