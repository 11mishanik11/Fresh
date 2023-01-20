let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
// Основные переменные
let pageBody = document.querySelector('body');
// --------------------------------------------

// Бургер меню ------------------------
document.querySelector('#burger').onclick = showMenu;
function showMenu() {

    document.querySelector('#menu').classList.toggle('active')
    pageBody.classList.toggle('hidden')
}

// Выпадающее меню ------------------------
if(isMobile.any()) {

    pageBody.classList.add('touch');
    let arrows = document.querySelectorAll('.arrow');

    for (let arrow of arrows) {
        let subMenu = arrow.nextElementSibling;
        let arrowParent = arrow.parentElement;
        arrow.removeAttribute('disabled');

        arrow.onclick = function() {
            arrow.classList.toggle('active');
            subMenu.classList.toggle('open');
            if(subMenu.classList.contains('open')) {
                arrowParent.setAttribute('aria-expanded', 'true')
                subMenu.setAttribute('aria-hidden', 'false')
            } else {
                arrowParent.setAttribute('aria-expanded', 'false')
                subMenu.setAttribute('aria-hidden', 'true')
            }
        }
    }
    
} else {
    pageBody.classList.add('mouse');
}
(function() {
    // Добавляет пэддинг для ссылки со стрелочкой
    let arrows = document.querySelectorAll('.arrow');

    for (let arrow of arrows) {
        arrow.previousElementSibling.style.paddingRight = '30px';
    }
})();

// Аккордеон
(function() {
    const accordeons = document.querySelectorAll('[data-accordeon]');

    for (let accordeon of accordeons) {
        accordeon.onclick = function() {
            const control = accordeon.querySelector('.questions__control')
            const content = accordeon.querySelector('.questions__text')

            accordeon.classList.toggle('open');
            if(accordeon.classList.contains('open')) {
                control.setAttribute('aria-expanded', 'true')
                content.setAttribute('aria-hidden', 'false')
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                control.setAttribute('aria-expanded', 'false')
                content.setAttribute('aria-hidden', 'true')
                content.style.maxHeight = null;
            }
        }
    }
})()







// jquery ------------------------------------------------------
$(document).ready(function(){

// Slider init
    $('.slider-recipes').slick({
        infinite: true,
        variableWidth: true,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: false,
                },

            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: false,
                },

            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                },

            },
        ]
    });

});
