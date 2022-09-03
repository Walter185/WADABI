var formHolderElement = document.querySelector("#form-holder");
var typeSelectorElement = document.querySelector("#type");
var titleElement = document.querySelector("#sectionChangeableTitle");
var section1ButtonsContainer = document.querySelector(".buttons-container");
var section1AddButton = section1.querySelector(".add-button");

typeChanged();

typeSelectorElement.addEventListener("change", typeChanged);

function typeChanged() {
    let type = typeSelectorElement.value;
    let content = "";
    if (type === "Credit Card") {
        content = ` <div class="form-controll-holder">
                        <input type="text" id="nameOnCard" name="nameOnCard" placeholder="Card's owner name">
                    </div>
                    <div class="form-controll-holder">
                        <input type="checkbox" name="addNewAddress" id="addNewAddress" onchange="newAddressCheckChanged(this)"><label for="addNewAddress">Enter a new address</label>
                    </div>
                    <div id="addressHolder">
                        
                    </div>
                    <div class="form-controll-holder">
                        <input type="tel" pattern="\d*" maxlength="19" id="creditCardNumber" name="creditCardNumber" placeholder="Card Number">
                    </div>
                    <div class="form-controll-holder">
                        <input type="tel" maxlength="5" id="cvv" name="cvv" placeholder="CVV">
                        <select id="expMonth" name="expMonth">
                            <option value="expMonth">Exp Month</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <select id="expYear" name="expYear">
                            <option value="expYear">Exp Year</option>
                            <option value="20">2020</option>
                            <option value="21">2021</option>
                            <option value="22">2022</option>
                            <option value="23">2023</option>
                            <option value="24">2024</option>
                            <option value="25">2025</option>
                            <option value="26">2026</option>
                            <option value="27">2027</option>
                            <option value="28">2028</option>
                        </select>
                    </div>`
    } else if (type === "Bank Transfer") {
        content = `<div class="form-controll-holder">
                        <input type="text" id="ownerName" name="ownerName" placeholder="Owner full name">
                    </div>
                    <div class="form-controll-holder">
                        <input type="text" id="bankName" name="bankName" placeholder="Bank">
                    </div>
                    <div class="form-controll-holder">
                        <input type="text" id="accountNumber" name="accountNumber" placeholder="Account number ">
                        <input type="text" id="routingNumber" name="routingNumber" placeholder="Routing number ">
                    </div>`
    } else if (type === "PayPal") {
        content = `<div class="form-controll-holder">
                        <input type="text" id="paypalEmail" name="paypalEmail" placeholder="PayPal Email">
                    </div>`
    }
    formHolderElement.innerHTML = content;
    backToAdd();
}

function editThis(target) {
    typeSelectorElement.value = target.parentElement.parentElement.parentElement.querySelector(".c1").textContent;
    typeChanged();
    titleElement.textContent = "Edit";
    section1AddButton.textContent = "Save Changes";
    if (!section1ButtonsContainer.querySelector("#cancelButton")) {
        var cancelButton = document.createElement("button");
        cancelButton.classList.add("add-button");
        cancelButton.textContent = "Cancel";
        cancelButton.id = "cancelButton";
        cancelButton.addEventListener("click", backToAdd);
        section1ButtonsContainer.appendChild(cancelButton);
    }
}

function deleteThis(target) {

}

function backToAdd() {
    titleElement.textContent = "Add";
    section1AddButton.textContent = "Add";
    if (section1ButtonsContainer.querySelector("#cancelButton")) {
        section1ButtonsContainer.removeChild(section1ButtonsContainer.querySelector("#cancelButton"));
    }
}

newAddressCheckChanged(document.querySelector("#addNewAddress"));

function newAddressCheckChanged(target) {
    let addressHolder = document.querySelector("#addressHolder");
    let content = "";
    if (target.checked) {
        content = `         <div class="form-controll-holder">
                                <input type="text" name="address" placeholder="Address">
                            </div>
                            <div class="form-controll-holder">
                                <input type="text" name="city" placeholder="City">
                                <input type="text" name="zip" placeholder="Zip Code">
                                <input type="text" name="state" placeholder="State">
                            </div>
                            <div class="form-controll-holder">
                                <select id="country" name="country">
                                    <option value="algeria" selected>Algeria</option>
                                    <option value="france">France</option>
                                    <option value="usa">USA</option>
                                    <option value="tunisia">Tunisia</option>
                                    <option value="egypt">Egypt</option>
                                </select>
                            </div>
                            <div class="form-controll-holder">
                                <input type="text" name="address-name" placeholder="Address Name (Optional)">
                            </div>`;
    } else if (!target.checked) {
        content = `     <select name="billingAddress">
                            <option value="0">Home Address</option>
                            <option value="1">Work Address</option>
                            <option value="2">Lussy's Address</option>
                            <option value="3">Mother's Address</option>
                        </select>`;
    }
    addressHolder.innerHTML = content;
}
