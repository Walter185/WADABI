var biggestQuantityPossible = 10;
var smallestQuantityPossible = 1;
var colorOptions = document.getElementById('colorOptions')
var colors = ["red", "white", "blue", "yellow", "green"];
var colorBoxes;

function quantityCheck(target) {
    if (target.value < smallestQuantityPossible) {
        target.value = smallestQuantityPossible;
    } else if (target.value > biggestQuantityPossible) {
        target.value = biggestQuantityPossible;
    }
}

function productOptionsInit() {
    let style1 = document.createElement('style');
    for (let i = 0; i < colors.length; i++) {
        let classn = "color-box-" + (i + 1);
        let colorElement = document.createElement("span");
        colorElement.classList.add("color-box");
        colorElement.classList.add(classn);
        colorElement.addEventListener('click', selectColor);
        colorOptions.appendChild(colorElement);
        style1.innerHTML += "." + classn + "{background:" + colors[i] + ";}\n"
    }
    document.getElementsByTagName("head")[0].appendChild(style1);
    colorBoxes = document.getElementsByClassName('color-box');
}

function selectColor() {
    if (!this.classList.contains('selected')) {
        this.classList.add("selected");
    }
    for (let i = 0; i < colors.length; i++) {
        if (!this.classList.contains("color-box-" + (i + 1))) {
            colorBoxes[i].classList.remove("selected");
        }
    }
}

productOptionsInit();
