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



// add and delete buttons
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.add-btn').forEach(function (button) {
      button.addEventListener('click', function () {
        const item = button.closest('.item');
        const newItem = item.cloneNode(true);

        
        newItem.querySelector('.add-btn').remove();

      
        document.querySelector('.added-items').appendChild(newItem);

        newItem.querySelector('.delete-btn').addEventListener('click', function () {
          newItem.remove();
        });
      });
    });

    
    document.querySelectorAll('.delete-btn').forEach(function (button) {
      button.addEventListener('click', function () {
        const item = button.closest('.item');

    
        if (item.parentNode.classList.contains('added-items')) {
          item.remove();
        }
      });
    });
  });

  
const cardsContainer = document.querySelector('.cards');


fetch('http://localhost:3001/cards')
  .then(response => response.json())
  .then(data => {
    // Loop through each card data object
    data.cards.forEach(card => {
      // Create card HTML structure
      const cardHTML = `
        <div class="card">
          <img src="${card.image}" alt="">
          <div class="overlay">
            <i class="fa-regular fa-heart"></i><span class="count">${card.likes}</span>
            <i class="fa-regular fa-comment"></i><span class="count">${card.comments}</span>
          </div>
        </div>
      `;
      
      // Append card HTML to cards container
      cardsContainer.innerHTML += cardHTML;
    });
  })
  .catch(error => console.error('Error fetching data:', error));
