// script.js

document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 0, name: 'Raw ofada rice', price: 50000, image: 'images-2/rice2.jpg'},
        { id: 1, name: 'Garri', price: 32000, image: 'images-2/download.jpg'},
        { id: 2, name: 'Beans', price: 42000, image: 'images-2/download3.jpg' },
        { id: 3, name: 'Rice', price: 45000, image: 'images-2/menu2.jpg' },
        { id: 4, name: 'Yam', price: 4500, image: 'images-2/menu3.jpg' },
        { id: 5, name: 'Spagetti', price: 2500, image: 'images-2/image-small1.jpg' },
        { id: 6, name: 'Poundo yam', price: 3000, image: 'images-2/image-small2.jpg' },
        { id: 7, name: 'Yam flour', price: 3200, image: 'images-2/image-small3.jpg' },
        { id: 8, name: 'Cassava flour', price: 5500, image: 'images-2/image-small4.jpg' },
        { id: 9, name: 'Indomie', price: 3000, image: 'images-2/image 1.png' },
        { id: 10, name: 'Fufu flour', price: 4000, image: 'images-2/image 2.png' },
        { id: 12, name: 'Pepper', price: 40000, image: 'images-2/image 5.png' },
        { id: 13, name: 'Ofada and source', price: 2000, image: 'images-2/image 6.png' },
        { id: 14, name: 'Jollof Rice', price: 1700, image: 'images-2/menu4.jpg' },
        { id: 15, name: 'Fried Rice', price: 1800, image: 'images-2/menu5.jpg' },
        { id: 16, name: 'Brown Head set', price: 1800, image: 'images-2/product1 (1).jpg' },
        { id: 17, name: 'Pepsi Can', price: 1800, image: 'images-2/shoe.jpg' },
        { id: 18, name: 'White Head set', price: 1800, image: 'images-2/product1 (2).jpg' },
        { id: 19, name: 'Pepsi Can', price: 1800, image: 'images-2/product2.jpg' },
        { id: 20, name: 'Pepsi Can', price: 1800, image: 'images-2/modal5.jpg' },
        { id: 21, name: 'Pepsi Can', price: 1800, image: 'images-2/portfolio-7.jpg' },
        { id: 22, name: 'Pepsi Can', price: 1800, image: 'images-2/portfolio-1.jpg' },
        { id: 23, name: 'Tomatoes', price: 1500, image: 'images-2/Tomatoes.JPG' },
        { id: 24, name: 'Pepsi Can', price: 1800, image: 'images-2/sneakers.png' },
        { id: 25, name: 'Pepsi Can', price: 1800, image: 'images-2/sneakers.png' },
        // Add more products as needed
    ];

    
    const productsContainer = document.getElementById('products-container');
    generateProductListings(products);

    function generateProductListings(products) {
        productsContainer.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
            <img src="${product.image}">
                <h3>${product.name}</h3>
                <p class="price">&#8358;${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            `;
            productsContainer.appendChild(productElement);
        });
    }


    // Search functionality
    const searchInput = document.getElementById('search-input');

    // Event listener for search input
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => {
            return product.name.toLowerCase().includes(searchTerm);
        });
        generateProductListings(filteredProducts);

        const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(button.getAttribute('data-id'));
            const selectedProduct = products.find(product => product.id === productId);
            if (selectedProduct) {
                const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                const existingCartItem = cartItems.find(item => item.id === productId);
                if (existingCartItem) {
                    existingCartItem.quantity += 1;
                } else {
                    cartItems.push({ ...selectedProduct, quantity: 1 });
                }
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                updateCartCount();
            }
        });
    });
    });

    // Existing code for adding products to cart
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(button.getAttribute('data-id'));
            const selectedProduct = products.find(product => product.id === productId);
            if (selectedProduct) {
                const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                const existingCartItem = cartItems.find(item => item.id === productId);
                if (existingCartItem) {
                    existingCartItem.quantity += 1;
                } else {
                    cartItems.push({ ...selectedProduct, quantity: 1 });
                }
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                updateCartCount();
            }
        });
    });

    function updateCartCount() {
        const cartCountElement = document.getElementById('cart-count');
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        cartCountElement.textContent = totalCount;
    }
    
    updateCartCount();
});
