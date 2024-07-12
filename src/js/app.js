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



