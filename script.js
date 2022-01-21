//counters and totals 

let displayQtyShoes = document.querySelector("#qty-shoes");
let displayQtyBags = document.querySelector("#qty-bag");
let displayShipping = document.querySelector("#display-shipping");
let displayTotal = document.querySelector("#display-total");
let addShoes = document.querySelector("#plus--shoes");
let removeShoes = document.querySelector("#minus--shoes");
let addBag = document.querySelector("#plus--bag");
let removeBag = document.querySelector("#minus--bag");
let countShoes = 0;
let countBag = 0;
let shippingPrice = 0;
let totalPrice = 0;

addShoes.addEventListener("click", () => {
    countShoes++;
    updateCount();
});

removeShoes.addEventListener("click", () => {
    if (countShoes > 0) {
        countShoes--;
    } else {
        return;
    }
    updateCount();
});

addBag.addEventListener("click", () => {
    countBag++;
    updateCount();
});

removeBag.addEventListener("click", () => {
    if (countBag > 0) {
        countBag--;
    } else {
        return;
    }
    updateCount();
});

function updateCount() {
    displayQtyShoes.textContent = countShoes;
    displayQtyBags.textContent = countBag;
    if (countShoes > 0 || countBag > 0) {
        shippingPrice = 19;
    } else {
        shippingPrice = 0;
    }
    displayShipping.textContent = "$" + shippingPrice;
    totalPrice = ((countBag * 54.99) + (countShoes * 74.99) + shippingPrice).toFixed(2);
    displayTotal.textContent = "$" + totalPrice;
}

updateCount();

// form validation 

const form = document.querySelector("#form");
const modal = document.querySelector("#modal");

const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');
const userName = document.getElementById('name');
const nameError = document.querySelector('#name + span.error');

const required = [...document.querySelectorAll('*[required]')];
let errors;

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'Please enter your e-mail address';
    }
    else if (email.validity.typeMismatch) {
        emailError.textContent = 'Entered value needs to be an e-mail address.';
    }
}

function showNameError() {
    if (userName.validity.valueMissing) {
        nameError.textContent = 'Please enter your full name';
    }
    else if (userName.validity.patternMismatch) {
        nameError.textContent = 'Name can only contain alphanumeric characters.';
    }
}

function showGeneralError() {
    for (i = 0; i < required.length; i++) {
        if (required[i].validity.valueMissing) {
            required[i].nextElementSibling.textContent = "This is a required field"
            errors = true;
        }
        else {
            required[i].nextElementSibling.textContent = ""
            errors = false;
        }
    }
}

email.addEventListener('input', () => {
    if (email.validity.valid) {
        emailError.textContent = '';
    } else {
        showEmailError();
    }
});

userName.addEventListener('input', () => {
    if (userName.validity.valid) {
        nameError.textContent = '';
    } else {
        showNameError();
    }
});

form.addEventListener('submit', function (event) {
    showGeneralError();
    modal.style.display = "block";
    if (countShoes == 0 && countBag == 0) {
        modal.textContent = "You haven't ordered anything..";
        event.preventDefault();
    } else if (!email.validity.valid) {
        modal.textContent = "Please review your email";
        event.preventDefault();
    } else if (!userName.validity.valid) {
        modal.textContent = "Please review your name";
        event.preventDefault();
    }
    else if (errors == true) {
        modal.textContent = "Please review all the required fields..";
        event.preventDefault();
    }
    else {
    modal.textContent = "Success!";
    }
});

window.addEventListener("click", () => {
        modal.style.display = "none";
});