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

document.addEventListener('DOMContentLoaded', function() {
    const shopLink = document.getElementById('shopLink');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const sidebar = document.getElementById('sidebar');

    shopLink.addEventListener('click', function(event) {
        event.preventDefault();
        sidebar.innerHTML = dropdownMenu.innerHTML;
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && event.target !== shopLink) {
            sidebar.classList.remove('active');
        }
    });
});

