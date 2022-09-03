var articlesHeadersListElements = document.querySelectorAll(".link-header");


function articleMouseEntered(target) {
    target.classList.add("active");
    target.querySelector("i").classList.add("active");
    target.querySelector("h3").classList.add("active");
}

function articleMouseLeft(target) {
    target.classList.remove("active");
    target.querySelector("i").classList.remove("active");
    target.querySelector("h3").classList.remove("active");
}
