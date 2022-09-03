var descriptionContentContainer = document.getElementsByClassName('description-content')[0];
var reviewsContentContainer = document.getElementsByClassName('reviews-content')[0];
var descriptionButton = document.getElementsByClassName('descriptionButton')[0];
var reviewButton = document.getElementsByClassName('reviewsButton')[0];

function descriptionClicked(target) {
    target.classList.add('active');
    reviewButton.classList.remove('active');
    descriptionContentContainer.classList.remove("hide");
    if (!reviewsContentContainer.classList.contains("hide")) {
        reviewsContentContainer.classList.add("hide");
    }
}

function reviewsAndRatingsClicked(target) {
    target.classList.add('active');
    descriptionButton.classList.remove('active');
    reviewsContentContainer.classList.remove("hide");
    if (!descriptionContentContainer.classList.contains("hide")) {
        descriptionContentContainer.classList.add("hide");
    }
}
