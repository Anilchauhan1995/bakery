
$(".slick-slider").slick({
  slidesToShow: 1,
  infinite:true,
  arrows: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
    // dots: false, Boolean
   // arrows: false, Boolean
 });

 // Fancybox Config
$('[data-fancybox="images"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
  ],
  loop: false,
  protect: true
});
