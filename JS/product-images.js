var imagesContainer = document.getElementById('productImagesContainer');
var bigImageContainer = document.getElementById('bigImageContainer');
var bigImageContainerGridAreaName = "bigImg";
var images = ["./images/People&Products/1 (1).jpg", "./images/People&Products/1 (2).jpg", "./images/People&Products/1 (3).jpg", "./images/People&Products/1 (4).jpg", "./images/People&Products/1 (5).jpg", "./images/People&Products/1 (6).jpg"];

function productImagesInit() {
    var imagesCount = images.length;
    var gridTemplateAreaFirstRow = "";
    var gridTemplateAreaSecondRow = "";
    var gridTemplateArea = "";
    for (let i = 0; i < images.length; i++) {
        var bigImgElement = document.createElement("img");
        bigImgElement.src = images[i];
        bigImgElement.style.width = "100%";
        bigImgElement.classList.add("bImg");
        bigImgElement.style.display = "none";
        bigImgElement.addEventListener('click', imageZoom)
        bigImageContainer.appendChild(bigImgElement);

    }
    var prev = document.createElement("a");
    prev.classList.add("prev");
    prev.innerHTML = "&#10094;";
    prev.addEventListener("click", goToPrevPI);
    var next = document.createElement("a");
    next.classList.add("next");
    next.innerHTML = "&#10095;";
    next.addEventListener("click", goToNextPI);
    var styleSheet = document.createElement("style");
    styleSheet.id = "dynamicStyleSheet";
    var tempoInnerHTML = "";
    for (let i = 0; i < images.length; i++) {
        gridTemplateAreaFirstRow += bigImageContainerGridAreaName + " ";
        var cssClassNameAndArea = "smallImg" + (i + 1);
        gridTemplateAreaSecondRow += cssClassNameAndArea + " ";
        var cssClass = "." + cssClassNameAndArea + "{grid-area:" + cssClassNameAndArea + ";}\n";
        tempoInnerHTML += cssClass;
        var smallImageContainer = document.createElement("div");
        smallImageContainer.addEventListener("click", klickedImage);
        smallImageContainer.classList.add("smCont");
        smallImageContainer.classList.add(cssClassNameAndArea);
        var smallImgElement = document.createElement("img");
        smallImgElement.src = images[i];
        smallImgElement.style.width = "100%";
        smallImageContainer.appendChild(smallImgElement);
        imagesContainer.appendChild(smallImageContainer);
    }
    gridTemplateAreaFirstRow = "\'" + gridTemplateAreaFirstRow + "\'";
    gridTemplateAreaSecondRow = "\'" + gridTemplateAreaSecondRow + "\'";
    gridTemplateArea = gridTemplateAreaFirstRow + " " + gridTemplateAreaSecondRow;
    var productImagesClass = ".product-images{grid-template-areas:" + gridTemplateArea + ";}\n";
    tempoInnerHTML += productImagesClass;
    styleSheet.innerHTML = tempoInnerHTML;
    var headerpi = document.getElementsByTagName("head")[0];
    headerpi.appendChild(styleSheet);
    bigImageContainer.appendChild(prev);
    bigImageContainer.appendChild(next);
    bigImageContainer.childNodes[0].style.display = "block";
}

function klickedImage() {
    var bigImages = document.getElementsByClassName("bImg");
    var smallImagesContainers = document.getElementsByClassName("smCont");
    for (var i = 0; i < smallImagesContainers.length; i++) {
        if (this.classList.contains("smallImg" + (i + 1))) {
            bigImages[i].style.display = "block";
            for (var x = 0; x < bigImages.length; x++) {
                if (bigImages[i] !== bigImages[x]) {
                    bigImages[x].style.display = "none";
                }
            }
        }
    }
}

function goToNextPI() {
    console.log('next')
    var curent;
    var next;
    var bigImages = document.getElementsByClassName("bImg");
    for (var i = 0; i < bigImages.length; i++) {
        if (bigImages[i].style.display === "block") {
            current = i;
            break;
        }
    }
    if (current === (bigImages.length - 1)) {
        next = 0;
    } else {
        next = current + 1;
    }
    activateImage(next);
}

function goToPrevPI() {
    console.log('prev')
    var curent;
    var prev;
    var bigImages = document.getElementsByClassName("bImg");
    for (var i = 0; i < bigImages.length; i++) {
        if (bigImages[i].style.display === "block") {
            current = i;
            break;
        }
    }
    if (current === 0) {
        prev = bigImages.length - 1;
    } else {
        prev = current - 1;
    }
    activateImage(prev);
}

function activateImage(newActive) {
    var bigImages = document.getElementsByClassName("bImg");
    bigImages[newActive].style.display = 'block';
    for (var i = 0; i < bigImages.length; i++) {
        if (i !== newActive) {
            bigImages[i].style.display = 'none';
        }
    }
}

function imageZoom(){
    let url=this.getAttribute('src');
    window.open(url,'Image','width=782,height=1390,resizable=1');
}
productImagesInit();
