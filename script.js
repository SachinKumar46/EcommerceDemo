// You can add JavaScript code here to handle interactions or dynamic content (e.g., adding items to the cart).

// Example JavaScript code for adding event listener to the "Add to Cart" buttons:
const addToCartButtons = document.querySelectorAll('.product button');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
        // Add your cart logic here (e.g., update cart items, store data in local storage, etc.).
    });
});
