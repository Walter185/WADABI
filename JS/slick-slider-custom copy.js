$(document).on('ready', function () {
    $(".vertical-center-4").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 2
    });
    $(".vertical-center-3").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $(".vertical-center-2").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2
    });
    $(".vertical-center").slick({
        dots: true,
        vertical: true,
        centerMode: true,
    });
    $(".vertical").slick({
        dots: true,
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 5000,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6
                }
             },
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
             },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
             },
            {
                breakpoint: 900,
                settings: {
                    dots: false,
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
             },
            {
                breakpoint: 767,
                settings: {
                    dots: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
             }]
    });
    $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3
    });
    $(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: true
    });
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
    });
});
/***************************************** Automated scroll ****************************************/
var nextButton;
var articles = document.getElementsByClassName("regular");
for (let article of articles) {
    article.addEventListener('mouseenter', stopAutomated);
    article.addEventListener('mouseleave', startAutomated);
}
var intervalSlider = setInterval(automatedNextClick, 7000);

function automatedNextClick() {
    nextButton = document.getElementsByClassName("regular")[0].childNodes[2];
    nextButton.click();
}

function startAutomated() {
    intervalSlider = setInterval(automatedNextClick, 7000);
}

function stopAutomated() {
    clearInterval(intervalSlider);
}
