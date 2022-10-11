"use strict";

$(document).ready(function(){
    
    // СЛАЙДЕР
    
    $('.carousel__inner').slick({
        speed: 500,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron_left_solid_980.png" alt="arrow-left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron_right_solid_982.png" alt="arrow-right"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                    dotsClass: 'slick-dots',
                }
            }
        ]
    });


    
    // ТАБЫ
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });


    
    // ПОДРОБНЕЕ
    
    function toggleCard (selector) {
        $(selector).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__base').eq(i).toggleClass('catalog-item__base_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };
    toggleCard('.catalog-item__more');
    toggleCard('.catalog-item__back');


    
    // ФУТЕР/КАРТА
    
    //Убирает затемнение карты и info блок при клике !на! этот блок
    document.getElementById('hider').onclick = function() {
        document.getElementById('hider').classList.toggle('bg-none');
        document.getElementById('hider2').classList.toggle('footer__info-none');
    };
    //Добавляет затемнение карты и info блок при клике !вне! этого блока
    $(document).mouseup(function (o) {
        if ($('#hider').has(o.target).length === 0){
            $('#hider').removeClass('bg-none');
            $('#hider2').removeClass('footer__info-none')
        }
    });


    
    // МОДАЛЬНЫЕ ОКНА
    
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('300');
    });
    $('[data-close=close]').on('click', function (e) {
        $('.overlay, #consultation, #order, #thanks').fadeOut('fast');
    });
    //Получаем название определенного пульсометра из карточки и вставляем его в модалку
    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__description').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn(350);
        })
    });


    
    // ВАЛИДАТОР ФОРМЫ jquery-validate
    
    function validateForm(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                tel: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите своё имя",
                    minlength: jQuery.validator.format("Пожалуйста, введите не менее {0} символов")
                },
                tel: "Пожалуйста, введите свой телефон",
                email: {
                    required: 'Пожалуйста, введите свою почту',
                    email: "Пожалуйста, введите корректный адрес почты"
                }
            }
        });
    };
    validateForm('#consultation-form');
    validateForm('#consultation .feed-form');
    validateForm('#order .feed-form');


    
    // МАСКА ФОРМЫ - inputmask.jQuery
    
    $('input[name=tel]').inputmask("+7 (999) 999-99-99");

    

    // ПЛАВНАЯ ПРОКРУТКА И pageup
    
   // Pageup
    $(window).scroll(function() {                   
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    
    // Плавная прокрутка 
    function smothScroll(anchor){
        $(anchor).click(function(){
            const _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
        });
    }

    smothScroll("a[href^='#catalog-anchor']");
    smothScroll("a[href^='#up']");

    // ВСПЛЫВАНИЕ ОТЗЫВОВ - WOW.js + animate.css
    
    new WOW().init();

});



//Эксперимент. Спарсить дата атрибут и вывести его значения json в консоль P.S: Почему-то не робит
const el = document.querySelector("span");
let json = el.dataset.profession;
let data = json.parse(json);
console.log(data.name);
console.log(data.profession);

