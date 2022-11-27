const swiper = new Swiper('.new-product__slider', {
   loop: true,
   spaceBetween: 70,
   parallax: true,
   slidesPerView: 1,
   // autoplay: {
   //    delay: 3000,
   //    disableOnInteraction: false,
   // },
   speed: 1200,
   pagination: {
      el: '.controll-main-block__dots',
      clickable: true,
   },
   on: {
      //   init: function (swiper){
      //     const AllSlider = document.querySelector('.fraction-controll__all')
      //     AllSlider.innerHTML = swiper.slides.length - 2 < 10 ? `0${swiper.slides.length - 2}` : swiper.slides.length - 2;
      //   },
      //   slideChange: function (swiper){
      //     const CurentSlider = document.querySelector('.fraction-controll__current')
      //     CurentSlider.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex  + 1;
      //   },
   },
});