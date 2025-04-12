
document.addEventListener("DOMContentLoaded", function() {
    const cart = [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product');
            addToCart(productId);
        });
    });

    function addToCart(productId) {
        cart.push(productId);
        alert("Producto agregado al carrito. Total de productos: " + cart.length);
    }
});
