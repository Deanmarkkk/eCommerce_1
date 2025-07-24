const productContainer = document.querySelector('.product-container');

let html = '';
products.forEach((items) => {
    html += `
        <div class="product-section">
            <img class="product-image" src="${items.image}" alt="product-image">
            <div class="product-info-text">
                <p class="product-name">${items.name}</p>
                <p class="product-price">₱ ${items.price}</p>
                <p class="product-about">${items.about}</p>
            <button class="btnAddtoCart js-added-txt-${items.id}" >Add to Cart</button>
             </div>
        </div>
    `
productContainer.innerHTML = html;
});

function cartQuantity() {
    let cartQty = 0;
        cart.forEach((item) => {
            cartQty += item.quantity;
        })
        document.querySelector('.js-item-qty').innerHTML = cartQty;
};

document.querySelectorAll('.btnAddtoCart').forEach((button) => {
    button.addEventListener('click', () => {
       
        cartQuantity()

    })
})