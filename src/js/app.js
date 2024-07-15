// Function to open or close the sidebar
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('visible');
}


document.getElementById('cartIcon').addEventListener('click', function(event) {
    event.preventDefault(); 
    toggleSidebar();
});


document.getElementById('sidebarCloseBtn').addEventListener('click', function() {
    toggleSidebar();
});


document.addEventListener('click', function(event) {
    var sidebar = document.getElementById('sidebar');
    var cartIcon = document.getElementById('cartIcon');

    if (!sidebar.contains(event.target) && event.target !== cartIcon) {
        sidebar.classList.remove('visible');
    }
});

  
  // API
  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3001/cards");
      const data = await response.json();
      console.log(data);
  
      const cardContainer = document.querySelector(".mainapi");
  
      data.forEach((card) => {  
        cardContainer.innerHTML += `
          <div class="card">
            <img src="${card.image}" alt="">
            <div class="overlay">
              <i class="fa-regular fa-heart"></i><span class="count">${card.likes}</span>
              <i class="fa-regular fa-comment"></i><span class="count">${card.comments}</span>
            </div> 
          </div>
        `;
      });
         
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();



  // ADD to Card

document.addEventListener('DOMContentLoaded', function() {
  const productButtons = document.querySelectorAll('.product-button');
  const sidebar = document.getElementById('sidebar');
  const cartItemsContainer = document.getElementById('cartItemsContainer');
  const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');

  
  function addItemToCart(productTitle, productPrice) {
      
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
          <div class="cart-item-details">
              <img src="https://woodmart.xtemos.com/plants/wp-content/uploads/sites/12/2023/05/w-indoor-plants-small-1-0-351x401.jpg" alt="">
              <span>${productTitle}</span>
              <span>${productPrice}</span>
          </div>
          <button class="delete-item-btn">Delete</button>
      `;
      cartItemsContainer.appendChild(cartItem);

    
      const deleteBtn = cartItem.querySelector('.delete-item-btn');
      deleteBtn.addEventListener('click', function() {
          cartItem.remove();
      });
  }

  
  productButtons.forEach(button => {
      button.addEventListener('click', function() {
          const product = button.closest('.product');
          const productTitle = product.querySelector('.product-title').textContent.trim();
          const productPrice = product.querySelector('.product-price').textContent.trim();
          addItemToCart(productTitle, productPrice);
      });
  });
 
  sidebarCloseBtn.addEventListener('click', function() {
      sidebar.classList.remove('open');
  });

  const cartIcon = document.getElementById('cartIcon');
  cartIcon.addEventListener('click', function() {
      sidebar.classList.toggle('open');
  });
});
