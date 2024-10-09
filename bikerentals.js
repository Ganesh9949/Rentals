document.addEventListener('DOMContentLoaded', () => {
  const cart = [];
  const cartList = document.querySelector('.cart-list');
  const buyNowBtn = document.getElementById('buy-now');
  const checkoutSection = document.getElementById('checkout');

  // Function to update cart
  function updateCart() {
      cartList.innerHTML = '';
      cart.forEach((item, index) => {
          const cartItem = document.createElement('div');
          cartItem.innerHTML = `<p>${item.name} - ${item.price}</p>`;
          cartList.appendChild(cartItem);
      });
  }

  // Add to Cart functionality
  document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', function() {
          const product = this.parentElement;
          const productName = product.querySelector('h2').innerText;
          const productPrice = product.querySelector('p').innerText;
          cart.push({ name: productName, price: productPrice });
          updateCart();
      });
  });

  // Buy Now functionality
  buyNowBtn.addEventListener('click', () => {
      checkoutSection.style.display = 'block';
  });
});
