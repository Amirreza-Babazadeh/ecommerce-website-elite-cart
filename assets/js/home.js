/*=============== HOME SWIPER ===============*/
if (document.querySelector(".home-swiper") && typeof Swiper !== "undefined") {
  var homeSwiper = new Swiper(".home-swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  })
}

/*=============== PRODUCT SWIPER ===============*/
if (document.querySelector(".product-swiper") && typeof Swiper !== "undefined") {
  var productSwiper = new Swiper(".product-swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  })
}

/*=============== ELEVATE SWIPER ===============*/
if (document.querySelector(".product-elevate-swiper") && typeof Swiper !== "undefined") {
  var elevateSwiper = new Swiper(".product-elevate-swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  })
}
