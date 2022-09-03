var menuLinksUlElement = document.querySelector(".menu-links");
var dashMenuElement = document.querySelector(".dash-menu");

function clickedIconMenu(target) {
    target.classList.toggle("hide");
    menuLinksUlElement.classList.toggle("show");
    dashMenuElement.classList.toggle("expanded");
}
