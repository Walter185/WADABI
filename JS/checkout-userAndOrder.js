var firsSectionGridStyleElement = document.querySelector("#firsSectionGrid");
var shippingAddressElement = document.querySelector("#shippingAddress");
var password = document.querySelector("#password");
var password_confirmation = document.querySelector("#password_confirmation");
var country = document.querySelector("#country");
var dcRadio = document.querySelector("#creditOrDebitCard");
var paymentMethodsRadios = document.querySelectorAll("input[type='radio']");
paymentMethodsRadios.forEach(r => {
    r.addEventListener('change', paymentRadioChanged)
})
var creditOrDebitCardFormHolder = document.querySelector("#credit-or-debit-card-form-holder");
var smMedia = window.matchMedia("(max-width:991px)");
smMediaInit(smMedia);
smMedia.addListener(smMediaInit);

function paymentRadioChanged() {
    if (this.checked && this === dcRadio) {
        creditOrDebitCardFormHolder.classList.remove('hide');
    } else {
        creditOrDebitCardFormHolder.classList.add('hide');
    }
}

function displayVoucher(target){
    let voucherInputHolder = document.querySelectorAll(".voucher-input-holder")[0];
    voucherInputHolder.classList.toggle("hide");
}

function smMediaInit(screenSize) {
    if (screenSize.matches) {
        firsSectionGridStyleElement.innerHTML = ".first-section-grid {grid-template-areas: 'g1 g1''billingAddress shoppingBasket''contactInfos options''methodOfPayment emptyDiv''buyNowAndTerms buyNowAndTerms'; } @media(max-width:991px){.first-section-grid {grid-template-areas:'g1''shoppingBasket''options''billingAddress''contactInfos''methodOfPayment''buyNowAndTerms';}}";
    }
}

function showShippingAddressSection() {
    firsSectionGridStyleElement.innerHTML = ".first-section-grid {grid-template-areas: 'g1 g1''billingAddress shoppingBasket''shippingAddress options''contactInfos emptyDiv''methodOfPayment emptyDiv''buyNowAndTerms buyNowAndTerms'; } #country{border-bottom-left-radius:0;border-bottom-right-radius:0;} @media(max-width:991px){.first-section-grid {grid-template-areas:'g1''shoppingBasket''options''billingAddress''shippingAddress''contactInfos''methodOfPayment''buyNowAndTerms';}}";
    shippingAddressElement.classList.remove("hidden");
}

function hideShippingAddressSection() {
    firsSectionGridStyleElement.innerHTML = ".first-section-grid {grid-template-areas: 'g1 g1''billingAddress shoppingBasket''contactInfos options''methodOfPayment emptyDiv''buyNowAndTerms buyNowAndTerms'; } #country{border-bottom-left-radius:10px;border-bottom-right-radius:10px;border-width:1px;} @media(max-width:991px){.first-section-grid {grid-template-areas:'g1''shoppingBasket''options''billingAddress''contactInfos''methodOfPayment''buyNowAndTerms';}}";
    shippingAddressElement.classList.add("hidden");
}

function checkedShippingSameAsBilling(target) {
    if (target.checked) {
        hideShippingAddressSection();
    } else if (!target.checked) {
        showShippingAddressSection();
    }
}

function checkedCreateAccount(target) {
    let passwordSection = document.querySelector("#passwordSection");
    if (target.checked) {
        passwordSection.classList.remove("hide");
    } else if (!target.checked) {
        password.value = "";
        password_confirmation.value = "";
        passwordSection.classList.add("hide");
    }
}

function checkedShowPassword(target) {
    if (target.checked) {
        password.type = "text";
        password_confirmation.type = "text";
    } else if (!target.checked) {
        password.type = "password";
        password_confirmation.type = "password";
    }
}
