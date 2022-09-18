$(document).ready(function(){
    //Слайдер
    $('.carousel__inner').slick({
        speed: 500,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron_left_solid_980.png" alt="arrow-left"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron_right_solid_982.png" alt="arrow-right"></img></button>',
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


    //Табы
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });


    //Подробнее
    function toggleCard (selector) {
        $(selector).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__base').eq(i).toggleClass('catalog-item__base_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
            })
        });
    };

    toggleCard('.catalog-item__more');
    toggleCard('.catalog-item__back');


});

//Эксперимент. Спарсить дата атрибут и вывести его значения json в консоль P.S: Почему-то не робит
const el = document.querySelector("span");
let json = el.dataset.profession;
let data = json.parse(json);
console.log(data.name);
console.log(data.profession);

