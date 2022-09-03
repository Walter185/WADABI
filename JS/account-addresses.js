var section1 = document.querySelector("#section1");
var section1TitleElement = section1.querySelector(".section-title");
var section1ButtonsContainer = section1.querySelector(".buttons-container");
var section1AddButton = section1.querySelector(".add-button");

function editThis(target) {
    section1.querySelector("input").focus();
    updateAnAddressLook();
}

function deleteThis(target) {

}

function addAnAddressLook() {
    section1TitleElement.textContent = "Add an new address";
    section1AddButton.textContent = "Add";
    section1ButtonsContainer.removeChild(section1ButtonsContainer.querySelector("#cancelButton"));
}

function updateAnAddressLook() {
    section1TitleElement.textContent = "Update an address"
    section1AddButton.textContent = "Update";

    if (!section1ButtonsContainer.querySelector("#cancelButton")) {
        var cancelButton = document.createElement("button");
        cancelButton.classList.add("add-button");
        cancelButton.textContent = "Cancel";
        cancelButton.id = "cancelButton";
        cancelButton.addEventListener("click", addAnAddressLook);
        section1ButtonsContainer.appendChild(cancelButton);
    }
}
