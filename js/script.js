$(document).ready(function(){

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.price-item__content').eq(i).toggleClass('price-item__content_active');
                $('.price-item__list').eq(i).toggleClass('price-item__list_active');
            })
        });
    };

    toggleSlide('.button_mini');
    toggleSlide('.button_back');
    
    $('.reviews-carusel').slick({
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 3500,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/reviews/slayder-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/reviews/slayder-right.png"></button>'   
      });

    function validateForm(form){
        $(form).validate({
            rules: {
              name: {
                required: true,
                minlength: 2
              },
              phone: "required",
              email: {
                required: true,
                email: true
              },
              text: {
                required: true,
                minlength: 10
              }
            },
            
            messages: {
              name: {
                required: "Введите свое имя",
                minlength: jQuery.validator.format("Введите минимум {0} символа!")
              },
              phone: "Введите свой номет телефона",
              email: {
                required: "Ведите почтовый ящик",
                email: "Неверно введен email"
              },
              text: {
                required: "Введите сообщение",
                minlength: jQuery.validator.format("Введите минимум {10} символа!")
              },
            }
        });
    };

    validateForm('.feed-form');
    validateForm('.feed-form_question');

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1200) {
          $('.pageup').fadeIn();
      } else {
          $('.pageup').fadeOut();
      }
    });
    $("a[href=#up]").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    }); 

});
 