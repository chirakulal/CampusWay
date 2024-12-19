// Function to open the help modal and display the image
function openHelp() {
    document.getElementById("helpModal").style.display = "block";
}

// Function to close the help modal
function closeModal() {
    document.getElementById("helpModal").style.display = "none";
}

// Optional: If you want to close the modal when clicking anywhere outside of it
window.onclick = function(event) {
    var modal = document.getElementById("helpModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
