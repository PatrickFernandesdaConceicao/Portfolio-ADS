  $('.diferenciais-carrousel').slick({
    infinite:true,
    slidesToShow: 3,
    prevArrow: $('.prev-arrow-diferenciais'),
    nextArrow: $('.next-arrow-diferenciais'),
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
    responsive:[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });