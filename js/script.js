var up = document.getElementById("up")

window.onscroll = function () {
    if (scrollY == 0) {
        up.style.display = "none";
    } else {
        up.style.display = "block";
    }
}
