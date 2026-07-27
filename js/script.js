// ================= NAVBAR =================

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const Close = document.getElementById('Close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (Close) {
    Close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}


// ================= ADD TO CART =================

const cartButtons = document.querySelectorAll(".cart");

cartButtons.forEach((button) => {

    button.addEventListener("click", function (e) {

        e.preventDefault();
        e.stopPropagation();

        const product = this.closest(".pro");

        const item = {
            id: product.dataset.id,
            name: product.dataset.name,
            price: Number(product.dataset.price),
            image: product.dataset.image,
            quantity: 1
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

       const existing = cart.find(p => Number(p.id) === Number(item.id));

        if (existing) {
            existing.quantity++;
        } else {
            cart.push(item);
        }

        localStorage.setItem("cart", JSON.stringify(cart));

       const toast = document.getElementById("toast");
const toastText = document.getElementById("toast-text");

toastText.innerText = item.name + " added to cart";

toast.classList.add("show");

setTimeout(() => {
    toast.classList.remove("show");
}, 2500);

    });

});


// ================= CART PAGE =================

const cartTable = document.getElementById("cart-items");

if (cartTable) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let html = "";
    let grandTotal = 0;

    cart.forEach(item => {

        grandTotal += item.price * item.quantity;

        html += `
        <tr>

            <td>
                <a href="#" class="remove-item" data-id="${item.id}">
                    <i class="fa-regular fa-circle-xmark"></i>
                </a>
            </td>

            <td>
               <img src="/img/products/${item.image.split('/').pop()}" width="70">
            </td>

            <td>${item.name}</td>

            <td>₹${item.price.toLocaleString()}</td>

            <td>
                <input type="number"
               class="qty-input"
              data-id="${item.id}"
             value="${item.quantity}"
                  min="1">
            </td>

            <td>₹${(item.price * item.quantity).toLocaleString()}</td>

        </tr>
        `;
 
    });

    cartTable.innerHTML = html;


    // ===== TOTAL =====

    const subtotal = document.getElementById("cart-subtotal");
    const total = document.getElementById("cart-total");

    if (subtotal) {
        subtotal.innerText = "₹" + grandTotal.toLocaleString();
    }

    if (total) {
        total.innerText = "₹" + grandTotal.toLocaleString();
    }


    // ===== REMOVE PRODUCT =====

    const removeButtons = document.querySelectorAll(".remove-item");

    removeButtons.forEach(btn => {

        btn.addEventListener("click", function (e) {

            e.preventDefault();

            const id = this.dataset.id;

            let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart = cart.filter(item => Number(item.id) !== Number(id));

            localStorage.setItem("cart", JSON.stringify(cart));

            location.reload();

        });

    });

}

// ===== QUANTITY UPDATE =====

const qtyInputs = document.querySelectorAll(".qty-input");

qtyInputs.forEach(input => {

    input.addEventListener("change", function () {

        const id = this.dataset.id;
        const qty = Math.max(1, parseInt(this.value) || 1);

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const product = cart.find(item => Number(item.id) === Number(id));;

        if (product) {
            product.quantity = qty;
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        location.reload();

    });

});
// ================= CART BADGE =================

function updateCartBadge() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    let count = 0;

    cart.forEach(item => {
        count += item.quantity;
    });

    const desktopBadge = document.getElementById("cart-count");
    const mobileBadge = document.getElementById("cart-count-mobile");

    if (desktopBadge) {
        desktopBadge.innerText = count;
         desktopBadge.style.display = count > 0 ? "flex" : "none";
    }

    if (mobileBadge) {
        mobileBadge.innerText = count;
         mobileBadge.style.display = count > 0 ? "flex" : "none";
    }

}

updateCartBadge();
// ================= SHOP SEARCH =================


const searchInput =
    document.getElementById("search-input") ||
    document.getElementById("home-search");

const productCards = document.querySelectorAll(".pro");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const searchValue = this.value.toLowerCase().trim();

        productCards.forEach(product => {

            const productName = product.querySelector("h5").innerText.toLowerCase();
            const brandName = product.querySelector("span").innerText.toLowerCase();

            if (
                productName.includes(searchValue) ||
                brandName.includes(searchValue)
            ) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }

        });

    });

}

