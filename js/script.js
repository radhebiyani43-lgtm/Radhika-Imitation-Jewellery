function showDetails(name, price, code, metal, weight, stone, warranty, ret) {

document.getElementById("popup").style.display = "flex";

document.getElementById("pName").innerHTML = name;

document.getElementById("pPrice").innerHTML = price;

document.getElementById("pCode").innerHTML = code;

document.getElementById("pMetal").innerHTML = metal;

document.getElementById("pWeight").innerHTML = weight;

document.getElementById("pStone").innerHTML = stone;

document.getElementById("pWarranty").innerHTML = warranty;

document.getElementById("pReturn").innerHTML = ret;

}

function closePopup(){

document.getElementById("popup").style.display="none";

}
// =========================
// SHOPPING CART
// =========================

// Load existing cart or create empty cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count in navbar
function updateCartCount() {
    const cartCounter = document.getElementById("cart-count");
    if (cartCounter) {
        cartCounter.innerText = cart.length;
    }
}

// Show count when page loads
updateCartCount();

// Add event to every Add to Cart button
const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(button => {

    button.addEventListener("click", function () {

        const product = {
            name: this.dataset.name,
            price: Number(this.dataset.price),
            image: this.dataset.image,
            quantity: 1
        };

        // Check if product already exists
        const existing = cart.find(item => item.name === product.name);

        if (existing) {
            existing.quantity++;
        } else {
            cart.push(product);
        }

        // Save cart
        localStorage.setItem("cart", JSON.stringify(cart));

        // Update navbar
        updateCartCount();

        alert(product.name + " added to cart ✅");

    });

});