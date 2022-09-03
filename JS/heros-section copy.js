var heros = document.getElementsByClassName('overlay-container');
var overlays = document.getElementsByClassName('my-overlay');
var bigImgContainer = document.getElementById('img16-4p5-container');
var heroSectionRoot = document.getElementById("heroSection"); 
var bigImg = bigImgContainer.childNodes[0];
var bigHeroTextHolder = bigImgContainer.childNodes[1].childNodes[0];
var titleHeroTextHolder1 = overlays[0].childNodes[0];
var titleHeroTextHolder2 = overlays[1].childNodes[0];
var titleHeroTextHolder3 = overlays[2].childNodes[0];
var titleHeroTextHolder4 = overlays[3].childNodes[0];
var img1 = "./images/ghardaia/16-4.5/101795021_172224867588113_6698750518424908562_n.jpg";
var img2 = "./images/ghardaia/16-4.5/101657958_2664389650552143_1135910719067333863_n.jpg";
var img3 = "./images/ghardaia/16-4.5/Sans titre.png";
var img4 = "./images/ghardaia/16-4.5/101684568_198391517945103_9134697806134082806_n.jpg";
var text1 = "Your gateway to the Algerian Sahara products.";
var text2 = "Traditional clothes for all ages";
var text3 = "Desert herbs, local drinks, Sahara incenses, and many consumables";
var text4 = "Free tourism tips and guidance services in the region of Ghardaia";
var title1 = "General";
var title2 = "Clothes";
var title3 = "Consumables";
var title4 = "Services";


function herosInit() {
    bigImg.src = img1;
    bigHeroTextHolder.textContent = text1;
    titleHeroTextHolder1.textContent = title1;
    titleHeroTextHolder2.textContent = title2;
    titleHeroTextHolder3.textContent = title3;
    titleHeroTextHolder4.textContent = title4;
    heroSectionRoot.addEventListener('mouseenter', mouseEnterHeros);
    heroSectionRoot.addEventListener('mouseleave', mouseLeaveHeros);
    for (let h of heros){
        h.addEventListener('mouseenter', mouseInHero)
    }
}

function automateSelection() {
    if (heros[0].classList.contains('active')) {
        bigImg.src = img2;
        bigHeroTextHolder.textContent = text2;
        activate(2);
    } else if (heros[1].classList.contains('active')) {
        bigImg.src = img3;
        bigHeroTextHolder.textContent = text3;
        activate(3);
    } else if (heros[2].classList.contains('active')) {
        bigImg.src = img4;
        bigHeroTextHolder.textContent = text4;
        activate(4);
    } else if (heros[3].classList.contains('active')) {
        bigImg.src = img1;
        bigHeroTextHolder.textContent = text1;
        activate(1);
    } else {
        bigImg.src = img1;
        bigHeroTextHolder.textContent = text1;
        activate(1);
    }
}

var myInterval = setInterval(automateSelection, 5000);

function mouseLeaveHeros() {
    myInterval = setInterval(automateSelection, 5000);
}

function mouseEnterHeros() {
    clearInterval(myInterval);
}

function activate(index) {
    if (index === 1) {
        heros[0].classList.add('active');
        heros[1].classList.remove('active');
        heros[2].classList.remove('active');
        heros[3].classList.remove('active');

    } else if (index === 2) {
        heros[0].classList.remove('active');
        heros[1].classList.add('active');
        heros[2].classList.remove('active');
        heros[3].classList.remove('active');

    } else if (index === 3) {
        heros[0].classList.remove('active');
        heros[1].classList.remove('active');
        heros[2].classList.add('active');
        heros[3].classList.remove('active');

    } else if (index === 4) {
        heros[0].classList.remove('active');
        heros[1].classList.remove('active');
        heros[2].classList.remove('active');
        heros[3].classList.add('active');

    }
}

function mouseInHero() {
    if (this.classList.contains("hero-container1")) {
        bigImg.src = img1;
        bigHeroTextHolder.textContent = text1;
        activate(1);
    } else if (this.classList.contains("hero-container2")) {
        bigImg.src = img2;
        bigHeroTextHolder.textContent = text2;
        activate(2);
    } else if (this.classList.contains("hero-container3")) {
        bigImg.src = img3;
        bigHeroTextHolder.textContent = text3;
        activate(3);
    } else if (this.classList.contains("hero-container4")) {
        bigImg.src = img4;
        bigHeroTextHolder.textContent = text4;
        activate(4);
    }
}
herosInit();