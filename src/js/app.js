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


  
  