document.addEventListener("DOMContentLoaded", function(event) { 
    var carouselNav = document.getElementById("carousel-nav");
    var btns = carouselNav.getElementsByTagName("a");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = carouselNav.getElementsByClassName("active");
            current[0].classList.remove("active");
            this.className = "active";
        });
    }

    var nav = document.getElementById("nav-bar");
    var navLinks = nav.getElementsByTagName("a");
    for (var i = 0; i < navLinks.length - 1; i++) {
        navLinks[i].addEventListener("click", function() {
            expandMenu();
        });
    }
});

function expandMenu() {
    var nav = document.getElementById("nav-bar");
    if (nav.className === "nav") {
        nav.className += " responsive";
    } else {
        nav.className = "nav";
    }
}