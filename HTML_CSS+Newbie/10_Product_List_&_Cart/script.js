const products = [
    { id: 1, name: "Pistachio Baklava", price: 6.50, img: "./media/image-baklava-desktop.jpg" },
    { id: 2, name: "Salted Caramel Brownie", price: 7.00, img: "./media/image-brownie-desktop.jpg" },
    { id: 3, name: "Red Velvet Cake", price: 8.00, img: "./media/image-cake-desktop.jpg" },
    { id: 4, name: "Vanilla Bean Creme Brulee", price: 5.50, img: "./media/image-creme-brulee-desktop.jpg" },
    { id: 5, name: "Macron Mix of Five", price: 4.00, img: "./media/image-macaron-desktop.jpg" },
    { id: 6, name: "Lemon Meringue Pie", price: 5.00, img: "./media/image-meringue-desktop.jpg" },
    { id: 7, name: "Vanilla Panna Cotta", price: 4.50, img: "./media/image-panna-cotta-desktop.jpg" },
    { id: 8, name: "Classic Tiramisu", price: 5.50, img: "./media/image-tiramisu-desktop.jpg" },
    { id: 9, name: "Waffle with Berries", price: 6.50, img: "./media/image-waffle-desktop.jpg" }
];


const cart = [];

function renderProducts() {
    const productContainer = document.querySelector('.products');
    productContainer.innerHTML = '';
    products.forEach(product => {
        const productCard = `
            <div class="product">
                <img src="${product.img}" alt="${product.name}">
                <p id = "name-font">${product.name}</p>
                <p id= "price-font">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <div>
                    <b><i class="fa-sharp fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;&nbsp;Add to Cart</b>
                    </div>
                </button>
            </div>`;
        productContainer.innerHTML += productCard;
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
}

function incrementQuantity(index) {
    cart[index].quantity++;
    updateCart();
}

function decrementQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }
    updateCart();
}


function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
    const cartCount = document.getElementById('cart-count');
    const orderTotal = document.getElementById('order-total');
    
    cartCount.textContent = cart.length;

    let total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        cartContainer.innerHTML += `
            <div class="cart-item">
                <p class="cart-text">${item.name} <br><br> <span = id="quantity-span">${item.quantity}x</span> <span id="price-span">&nbsp;&nbsp;  @&nbsp; $${item.price.toFixed(2)}</span> </p>
                <div class="quantity-controls">
                    <button id="decrement-${index}" onclick="decrementQuantity(${index})">
                        <i class="fa-solid fa-minus fa-xl"></i>
                    </button>
                    <button id="increment-${index}" onclick="incrementQuantity(${index})">
                        <i class="fa-solid fa-plus fa-xl"></i>
                    </button>
                </div>
                <button id="removeFromCart" onclick="removeFromCart(${index})">
                    <i class="fa-solid fa-xmark fa-xl"></i>
                </button>
            </div>
        `;
    });

    orderTotal.textContent = `$${total.toFixed(2)}`;
    
    document.getElementById('confirm-order').disabled = cart.length === 0;
}


document.addEventListener('DOMContentLoaded', renderProducts);

function confirmOrder() {
    document.querySelector('.container').innerHTML = `
        <div class="confirmation">
            <img src="./media/icon-order-confirmed.svg" alt="Order Confirmed">
            <h2>Order Confirmed</h2>
            <p>We hope you enjoy your food!</p>
            <div class="order-summary">
                ${cart.map(item => `<p>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</p>`).join('')}
                <p><strong>Order Total: ${document.getElementById('order-total').textContent}</strong></p>
            </div>
            <button onclick="startNewOrder()">Start New Order</button>
        </div>
    `;
}

function startNewOrder() {
    window.location.href = 'index.html';
}

document.getElementById('confirm-order').addEventListener('click', confirmOrder);
