document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".custom-card-slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
        },
        pagination: {
            el: ".swiper-page",
            clickable: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1400: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            350: {
                slidesPerView: 1,
                spaceBetween: 2,
            },
        },
    });
});


function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('visible');
}


document.getElementById('cartIcon').addEventListener('click', function(event) {
    event.preventDefault(); 
    toggleSidebar();
});


document.addEventListener('click', function(event) {
    var sidebar = document.getElementById('sidebar');
    var cartIcon = document.getElementById('cartIcon');

    if (!sidebar.contains(event.target) && event.target !== cartIcon) {
        sidebar.classList.remove('visible');
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const shopLink = document.getElementById('shopLink');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const sidebar = document.getElementById('sidebar');

    shopLink.addEventListener('click', function(event) {
        event.preventDefault();
        sidebar.innerHTML = dropdownMenu.innerHTML;
        sidebar.classList.toggle('active');
    });

   
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && event.target !== shopLink) {
            sidebar.classList.remove('active');
        }
    });
});

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
});


function fetchProducts() {
    fetch('http://localhost:3001/products')
        .then(response => response.json())
        .then(data => {
            const products = data.products;
            renderProducts(products);
        })
        .catch(error => console.error('Error fetching products:', error));
}


function renderProducts(products) {
    const mainCardSection = document.querySelector('.main-card-image');

    products.forEach(product => {
        const cardWordSection = document.createElement('div');
        cardWordSection.classList.add('card-word-section');
        cardWordSection.innerHTML = `
            <div class="card1">
                <div class="image-container">
                    <img src="${product.image}" alt="${product.name}" class="main-image">
                    <img src="${product.hoverImage}" alt="${product.name} Hover" class="hover-image">
                    <div class="overlay">
                        <div class="icons">
                            <div class="icon search"></div>
                            <div class="icon heart"></div>
                        </div>
                    </div>
                </div>
                <div class="details">
                    <h3 class="h3">${product.name}</h3>
                    <div class="rating">
                        <span class="star-card">★★★★☆</span>
                    </div>
                    <div class="price">
                        <span class="original-price">$98.00</span>
                        <span class="discounted-price">$${product.price.toFixed(2)}</span>
                    </div>
                    <button class="select-options" onclick="addToCart(${product.id})">Add to cart</button>
                </div>
            </div>
        `;
        mainCardSection.appendChild(cardWordSection);
    });
}

renderProducts(products);
fetchProducts();