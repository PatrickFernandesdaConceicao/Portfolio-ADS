$('.carrossel-items').slick({
    infinite:true,
    slidesToShow: 2,
    prevArrow: $('.prev-arrow-liga'),
    nextArrow: $('.next-arrow-liga'),
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

  $('.carrossel-items-2').slick({
    infinite:true,
    slidesToShow: 2,
    prevArrow: $('.prev-arrow-liga-2'),
    nextArrow: $('.next-arrow-liga-2'),
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