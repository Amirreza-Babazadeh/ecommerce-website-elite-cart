/*=============== HOME SWIPER ===============*/
var homeSwiper = new Swiper(".home-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
})

/*=============== PRODUCT SWIPER ===============*/
var productSwiper = new Swiper(".product-swiper", {
  loop: true,

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
})

/*=============== ELEVATE SWIPER ===============*/
var elevateSwiper = new Swiper(".product-elevate-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
})
