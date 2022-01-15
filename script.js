console.log("howdy");

let quantityBag = document.querySelector("#qty-bag");
bags = 0;
quantityBag.textContent = bags;

let quantityShoes = document.querySelector("#qty-shoes");
shoes = 0;
quantityShoes.textContent = shoes;


let plus = document.querySelector(".btn--plus");
let minus = document.querySelector(".btn--minus");

plus.addEventListener("click", function() {
    shoes++;
    console.log(shoes);
    quantityShoes.textContent = shoes;
});

minus.addEventListener("click", function() {
    shoes--;
    console.log(shoes);
    quantityShoes.textContent = shoes;
});

