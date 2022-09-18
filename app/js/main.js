$(document).ready(function(){
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
});
//Эксперимент. Спарсить дата атрибут и вывести его значения json в консоль P.S: Почему-то не робит
const el = document.querySelector("span");
let json = el.dataset.profession;
let data = json.parse(json);
console.log(data.name);
console.log(data.profession);