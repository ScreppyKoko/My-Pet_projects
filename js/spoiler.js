'use strict'

//*****************************************************
//********************* ПОДКЛЮЧАЕМ СПОЙЛЕР *********************
//*****************************************************

//ищем классы и добавляем в константу
const spoilerColumn = document.querySelectorAll('.footer__column_sp'),
    spoilerItem = document.querySelectorAll('.footer__item_sp'),
    spoilerTitle = document.querySelectorAll('.footer__title_sp'),
    spoilerList = document.querySelectorAll('.menu-footer_sp');


// бегаем ищем элементы и добавляем им классы
function getWindowWidth() {
    return window.innerWidth || document.body.clientWidth;
}
if (document.documentElement.clientWidth <= 479) {
    for (let i = 0; i < spoilerColumn.length; i++) {
        spoilerColumn[i].classList.add('spollers-block');
    }
    for (let i = 0; i < spoilerItem.length; i++) {
        spoilerItem[i].classList.add('spollers-block__item');
    }
    for (let i = 0; i < spoilerTitle.length; i++) {
        spoilerTitle[i].classList.add('spollers-block__title');
    }
    for (let i = 0; i < spoilerList.length; i++) {
        spoilerList[i].classList.add('spollers-block__body');
    }
}

// функции для возможности анмирования скрытых элементов

// открытие спойлера 
let _slideUp = (target, duration = 500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
    }, duration);
}

// закрытие спойлера
let _slideDown = (target, duration = 500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none')
        display = 'block';
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
    }, duration);
}

// комбинация функций
let _slideToggle = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add('_slide');
        if (window.getComputedStyle(target).display === 'none') {
            return _slideDown(target, duration);
        } else {
            return _slideUp(target, duration);
        }
    }
}
//========================================
//Spoiler
let spollers = document.querySelectorAll("._spoller");
let spollersGo = true;
if (spollers.length > 0) {
    for (let index = 0; index < spollers.length; index++) {
        const spoller = spollers[index];
        spoller.addEventListener("click", function (e) {
            if (document.documentElement.clientWidth >= 480) { //проверка , можно менять ширину
                return;
            }
            if (spollersGo) {
                spollersGo = false;
                if (spoller.classList.contains('_spoller-480') && window.innerWidth > 480) {
                    return false;
                }
                // оставил только для ширины 480
                spoller.classList.toggle('_active');
                _slideToggle(spoller.nextElementSibling);

                setTimeout(function () {
                    spollersGo = true;
                }, 500);
            }
        });
    }
}