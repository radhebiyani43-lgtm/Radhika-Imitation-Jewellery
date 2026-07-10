// Get cart data from Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Select HTML elements
const cartItems = document.getElementById("cart-items");
const grandTotal = document.getElementById("grand-total");

let total = 0;

// Display all products
cart.forEach((product, index) => {

    let productTotal = product.price * product.quantity;

    total += productTotal;

    cartItems.innerHTML += `
        <tr>
            <td>${product.name}</td>
            <td>₹${product.price}</td>
            <td>

<button onclick="changeQuantity(${index}, -1)">
    -
</button>

<span>
    ${product.quantity}
</span>

<button onclick="changeQuantity(${index}, 1)">
    +
</button>

</td>
            <td>₹${productTotal}</td>
            <td>
                <button onclick="removeItem(${index})">
                    Remove
                </button>
            </td>
        </tr>
    `;

});

// Update Grand Total
grandTotal.innerHTML = "Grand Total : ₹" + total;

// Remove Product
function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();

}
// Clear Entire Cart

function clearCart(){

    localStorage.removeItem("cart");

    alert("Cart Cleared Successfully ✅");

    location.reload();

}
// Change Product Quantity

function changeQuantity(index, change){

    cart[index].quantity += change;


    // Remove product if quantity becomes 0

    if(cart[index].quantity <= 0){

        cart.splice(index,1);

    }


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    location.reload();

}
function goCheckout(){

    window.location.href="checkout.html";

}