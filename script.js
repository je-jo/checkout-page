let quantityShoes = document.querySelector("#qty-shoes");
let addShoes = document.querySelector("#plus--shoes");
let removeShoes = document.querySelector("#minus--shoes");
let shoes = 0;
let quantityBag = document.querySelector("#qty-bag");
let addBag = document.querySelector("#plus--bag");
let removeBag = document.querySelector("#minus--bag");
let bag = 0;
let shippingPrice = 0;
let shipping = document.querySelector("#shipping");
let totalPrice = 0;
let total = document.querySelector("#total");

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
    shoes++;
    console.log(shoes);
    updateCount();
});

removeShoes.addEventListener("click", () => {
    // decreaseCount(shoes);
    if (shoes > 0) {
        shoes--;
        console.log(shoes);
    } else {
        console.log(shoes);
        return;
    }
    updateCount();
});

addBag.addEventListener("click", () => {
    bag++;
    console.log(bag);
    updateCount();
});

removeBag.addEventListener("click", () => {
    if (bag > 0) {
        bag--;
        console.log(bag);
    } else {
        console.log(bag);
        return;
    }
    updateCount();
});

function updateCount() {
    quantityShoes.textContent = shoes;
    quantityBag.textContent = bag;
    if (shoes > 0 || bag > 0) {
        shippingPrice = 19; 
    } else {
        shippingPrice = 0;
    }
    shipping.textContent = "$" + shippingPrice;
    totalPrice = ((bag * 54.99) + (shoes * 74.99) + shippingPrice).toFixed(2);
    total.textContent = "$" + totalPrice;
}




updateCount();

