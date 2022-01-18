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

// function increaceCount(item) {
//     item++;
//     console.log(item);
//     updateCount();
// }

// function decreaseCount(item) {
//     if (item > 0) {
//         item--;
//         console.log(item);
//     } else {
//         console.log(item);
//         return;
//     }
//     updateCount();
// }

addShoes.addEventListener("click", () => {
    //increaceCount(shoes);
    countShoes++;
    console.log(countShoes);
    updateCount();
});

removeShoes.addEventListener("click", () => {
    // decreaseCount(shoes);
    if (countShoes > 0) {
        countShoes--;
        console.log(countShoes);
    } else {
        console.log(countShoes);
        return;
    }
    updateCount();
});

addBag.addEventListener("click", () => {
    countBag++;
    console.log(countBag);
    updateCount();
});

removeBag.addEventListener("click", () => {
    if (countBag > 0) {
        countBag--;
        console.log(countBag);
    } else {
        console.log(countBag);
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