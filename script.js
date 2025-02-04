document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("solid");
            navbar.classList.remove("transparent");
        } else {
            navbar.classList.add("transparent");
            navbar.classList.remove("solid");
        }
    });
});
