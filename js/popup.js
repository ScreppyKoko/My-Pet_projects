'use strict'

//*****************************************************
//********************* POP - UP  *********************
//*****************************************************

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

// Проверка существования ссылок в DOM
if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index]; // Получаем каждую ссылку в отдельную переменную 
        popupLink.addEventListener("click", function(e) {
            const popupName = popupLink.getAttribute('href').replace('#', ''); // Убираем значок хэша 
            const curentPopup = document.getElementById(popupName); // Получаем сам объект попапа 
            popupOpen(curentPopup); // Отправляем в функцию для открытия попапа
            e.preventDefault(); // Блокируем дальнейшую работу ссылки 
        });
    }
}

// Возможность закрытия попапа разными элемента
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function(e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

// открываем попап
function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock(); // Блокируем скролл 
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function(e) {
            //даём возможность закрыть при клике на любую область, где в родителях нет .popup__content' 
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

// закрываем попап
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

// блокируем скролл и высчитаем ширину дисплея
function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrap').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}

// убираем скролл у попапа в момент открытия/закрытия
function bodyUnLock() {
    setTimeout(function() {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}

// ДАЁМ ВОЗМОЖНОСТЬ ПОЛЬЗОВАТЕЛЮ ЗАКРЫВАТЬ ОКНО НА Escape
document.addEventListener('keydown', function(e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});