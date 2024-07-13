let swiper = new Swiper('.slider', {
    slidesPerView: 5,
    slidesPerGroup: 2,
    direction: getDirection(),
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });
  
  function getDirection() {
    const windowWidth = window.innerWidth;
    const direction = windowWidth <= 760 ? 'vertical' : 'horizontal';
  
    return direction;
  }
  