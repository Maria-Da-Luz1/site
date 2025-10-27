let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    totalPrice += price;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceDisplay = document.getElementById('total-price');

    // Limpar a lista de itens
    cartItems.innerHTML = '';

    // Adicionar os itens do carrinho
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
    });

    // Atualizar o total
    totalPriceDisplay.textContent = `Total: R$ ${totalPrice.toFixed(2)}`;
}
