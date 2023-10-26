$(".slick-slider").slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 300,
  prevArrow: false,
  nextArrow: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// $(".multiple-items").slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   arrows: true,

// });

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});

$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  prevArrow: '<i class="fa-solid fa-chevron-left"></i>',
  nextArrow: '<i class="fa-solid fa-chevron-right"></i>',
  centerMode: true,
  focusOnSelect: true,
});
