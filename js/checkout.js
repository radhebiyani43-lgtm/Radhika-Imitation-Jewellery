// Load Cart

let cart = JSON.parse(localStorage.getItem("cart")) || [];


let checkoutItems = document.getElementById("checkout-items");

let checkoutTotal = document.getElementById("checkout-total");


let total = 0;



cart.forEach(product => {


let productTotal = product.price * product.quantity;


total += productTotal;


checkoutItems.innerHTML += `

<p>
${product.name} 
x ${product.quantity}
= ₹${productTotal}

</p>

`;


});


checkoutTotal.innerHTML = "Total: ₹" + total;