'use strict'

//*****************************************************
//*************** ИНФОРМИРУЕМ О ПОДПИСКЕ (SUBSCRIPE)  **************
//*****************************************************
export function subscriptionInformation() {
    const form_sub = document.querySelector('#subscripe_form'),
        form_subInput = document.querySelector('.subscripe__input'),
        messageSubscription = document.querySelector('.subscripe__title');

    form_sub.addEventListener("submit", (e) => {
        const email_subValue = form_subInput.value;
        e.preventDefault();
        if (email_subValue.length === 0) {
            form_subInput.classList.add('error');
            form_subInput.placeholder = "The Email field is required";
        } else if (!validateEmail(email_subValue)) {
            messageSubscription.innerHTML = "Email is invalid. Please try again.";
            messageSubscription.style.color = '#ff7b47';
        } else {
            form_subInput.classList.remove('error');
            messageSubscription.classList.remove('subscripe__title');
            messageSubscription.classList.add('subscription-message');
            messageSubscription.style.color = '#fff';
            messageSubscription.innerHTML = `Thank you. </br> Address <u>` + email_subValue + `</u> added to mailing list.`;
        }
        console.log(email_subValue);
    });
};



//*****************************************************
//*****************  FEEDBACK ФОРМА *******************
//*****************************************************
export function formValidateCheck() {
    const form = document.querySelector('.input-form'),
        formInputs = document.querySelectorAll('.input-form__entry-field'),
        inputEmail = document.querySelector('.input-form__entry-field_email'),
        inputUserName = document.querySelector('.input-form__entry-field_user-name'),
        inputCheckbox = document.querySelector('.checkbox-form'),
        inputCheckboxMark = document.querySelector('.checkbox-mark');

    // ******************** ДОБАВЛЯЕМ СОБЫТИЙНОГО СЛУШАТЕЛЯ ***************
    form.addEventListener('submit', (event) => {
        let emailValue = inputEmail.value,
            userNameValue = inputUserName.value,
            checkboxValue = inputCheckbox.checked,
            result = {
                userName: userNameValue,
                email: emailValue
            }
        // ******************** ЗАПРЕЩАЕМ ОТПРАВКУ ПУСТОЙ ФОРМЫ ***************
        event.preventDefault();
        // ******************** ПРОВЕРЯЕМ ПОЛЯ ВСЕХ ИНПУТОВ НА ЗАПОЛНЕНИЕ ***************
        formInputs.forEach(function (input) {
            if (input.value === '') {
                input.classList.add('error');
                document.getElementById('required-field_' + input.id).style.display = 'block';
            } else {
                input.classList.remove('error');
                document.getElementById('required-field_' + input.id).style.display = 'none';
            }
        });

        // ******************** ПРОВЕРЯЕМ ЧЕКБОКС ***************
        if (!checkboxValue) {
            inputCheckboxMark.classList.add('error');
            document.getElementById('required-field_' + inputCheckbox.id).style.display = 'block';
        } else {
            inputCheckboxMark.classList.remove('error');
            document.getElementById('required-field_' + inputCheckbox.id).style.display = 'none';
        }
        // ******************** ПРОВЕРЯЕМ NAME НА ВАЛИДНОСТЬ ***************
        if (!validateName(userNameValue)) {
            inputUserName.classList.add('error');
            if (userNameValue.length !== 0) {
                document.getElementById('required-field_userNameValid').style.display = 'block';
            }
        } else {
            inputUserName.classList.remove('error');
            document.getElementById('required-field_userNameValid').style.display = 'none';
        }
        // ******************** ПРОВЕРЯЕМ EMAIL НА ВАЛИДНОСТЬ ***************
        if (!validateEmail(emailValue)) {
            inputEmail.classList.add('error');
            if (emailValue.length !== 0) {
                document.getElementById('required-field_emailValid').style.display = 'block';
            }
        } else {
            inputEmail.classList.remove('error');
            document.getElementById('required-field_emailValid').style.display = 'none';
        }
        console.log(result);
    });
};

function validateEmail(email) {
    const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reEmail.test(String(email).toLowerCase());
}

function validateName(userName) {
    const reUserName = /^[a-zA-Zа-яА-ЯЁё]/;
    return reUserName.test(String(userName));
}