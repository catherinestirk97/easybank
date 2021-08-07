let hamburger = document.querySelector(".hamburger-button");
let links = document.querySelector(".nav-links");
hamburger.addEventListener("click", toggleMenu);

function toggleMenu(){
    if(links.classList.contains("active")){
        links.classList.remove("active");
    } else {
        links.classList.add("active");
    }
}

window.addEventListener('resize', fixHamburgerBug);

function fixHamburgerBug(){
    if(screen.width > 767) {
        links.classList.remove("active");
    }
}

