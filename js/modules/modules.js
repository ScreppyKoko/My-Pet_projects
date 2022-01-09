'use strict'
//*****************************************************
//********************* ВКЛЮЧАЕМ ВИДЕО  *********************
//*****************************************************
export function startVideo() {
    const playButton = document.querySelector('.play'),
        coverImage = document.querySelector('.cover');

    if (playButton) {
        playButton.
            addEventListener("click", (play) => {
                playButton.classList.add('_hide');
                coverImage.classList.add('_hide');
            });
    }
};

// возвращаем пользователя по клику на начало страницы 
export function scrollToTop() {
    window.scrollTo(0, 0);
};

// вызов функций стрелки и счетчика
export function scrollHandler() {
    numberCounter();
    scrollUpArrow();
};

//*****************************************************
//********************* СЧЕТЧИК ДОСТИЖЕНИЙ *************
//*****************************************************
function runString(value, sign, id) {
    let n = 1;
    let timerId = setTimeout(function run() {
        n++;
        if (n > value) {
            clearTimeout(timerId);
        } else {
            document.getElementById(id).innerHTML = n + sign;
            setTimeout(run, 10);
        }
    }, 1);
};

// функция счётчика 
function numberCounter() {
    const scrollUp = document.querySelector('#scrollUp')
    if (window.scrollY > 500 && window.scrollY < 600) { // задаём выполнение когда в определенный момент скролла
        runString(172, ' +', 'advantages-1');
        runString(181, ' +', 'advantages-2');
        runString(98, '%', 'advantages-3');
        runString(146, ' +', 'advantages-4');
    }
};

//*****************************************************
//********************* СТРЕЛКА SCROLL_UP *********************
//*****************************************************
export function scrollUpArrow() {
    if (window.scrollY > 600) { // убираем opasity у стрелки при скролле на 600px
        scrollUp.classList.remove('arrow_hide')
    } else {
        scrollUp.classList.add('arrow_hide')
    }
};