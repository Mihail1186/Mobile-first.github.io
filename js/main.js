$(function(){
   $('.top-slider').slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/prev.svg" alt="next arrow"></button>',
      prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/prev.svg" alt="prew arrow"></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {

          }
        },
        {
          breakpoint: 640,
          settings: {
            arrows:false
          }
        }
      ]
    });
});


$(function(){
  $('.slider__footer').slick({
     dots: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/prev.svg" alt="next arrow"></button>',
     prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/prev.svg" alt="prew arrow"></button>',
     responsive: [
       {
         breakpoint: 1024,
         settings: {

         }
       },
       {
         breakpoint: 640,
         settings: {
           arrows:false
         }
       }
     ]
   });
});