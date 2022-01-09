"use strict"

//*****************************************************
//*************** МЕНЮ - БУРГЕР  *********************
//*****************************************************

//ищем классы, добавляем  в константы
const iconMenu = document.querySelector('.menu__icon'),
    menuBody = document.querySelector('.header__container');
if (iconMenu) { //проверяем есть ли такой класс
    //вешаем на иконку событие клик
    iconMenu.addEventListener("click", function(e) {
        // блокируем скролл при открытом меню
        document.body.classList.toggle('_lock');
        // добавляем/удаляем класс для анимации иконки по клику
        iconMenu.classList.toggle('_active');
        //  добавляем/удаляем класс для выезда меню по клику
        menuBody.classList.toggle('_active');
    });
}

const menuLinks = document.querySelectorAll('.menu__link')
if (menuLinks.length > 0) {
    // пробегаемся в поиске элементов с нужным классом
    menuLinks.forEach(menuLink => {
        // по клику вызываем функцию 
        menuLink.addEventListener("click", onMenuLinkClick);
    })

    function onMenuLinkClick(e) {
        if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            // удаляем класс у иконки бургера
            iconMenu.classList.remove('_active');
            // удаляем класс у меню бургера
            menuBody.classList.remove('_active');
        }
    };
}