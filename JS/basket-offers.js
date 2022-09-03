var totalText = document.querySelector("tfoot tr .TotalForBigScreen");
var totalTextMobilePlace = document.querySelector("tfoot tr .TotalForMobile");



var amountThead = document.querySelectorAll("thead tr th")[2];
var rows = document.querySelectorAll("tbody tr");
var amountTfoot = document.querySelectorAll("tfoot tr td")[2];

function mouseInBonus(target) {
    target.getElementsByClassName("addToCartHolder")[0].classList.add("active");
}

function mouseOutBonus(target) {
    target.getElementsByClassName("addToCartHolder")[0].classList.remove("active");
}

function mobileInit(display) {
    amountThead.style.display = display;
    for (let i = 0; i < rows.length; i++){
        rows[i].children[2].style.display =  display;
    }
    amountTfoot.style.display =  display;
}

function xsMediaFunc(med) {
    if (med.matches) {
        totalText.textContent = totalText.textContent.replace("Total: ", "");
        totalTextMobilePlace.textContent = "Total: ";
        mobileInit("block");
    }
}

function xxsMediaFunc(med) {
    if (med.matches) {
       mobileInit("none"); 
    }
}

var xs = window.matchMedia("(max-width: 767px) and (min-width: 375px)");
var xxs = window.matchMedia("(max-width: 374px)");
xsMediaFunc(xs);
xxsMediaFunc(xxs);
xs.addListener(xsMediaFunc);
xxs.addListener(xxsMediaFunc);
