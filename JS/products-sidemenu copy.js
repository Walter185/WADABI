var iElementOfSearch = document.getElementById("searchMenuArrow");
var menuListElement = document.getElementById("menuList");

function searchToggle() {
    menuListElement.classList.toggle("smallScreenHide");
    if (iElementOfSearch.classList.contains("fa-angle-down")) {
        iElementOfSearch.classList.add("fa-angle-up");
        iElementOfSearch.classList.remove("fa-angle-down");
    } else if (iElementOfSearch.classList.contains("fa-angle-up")) {
        iElementOfSearch.classList.add("fa-angle-down");
        iElementOfSearch.classList.remove("fa-angle-up");
    }
}
