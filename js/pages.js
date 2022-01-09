import { scrollUpArrow, scrollToTop } from './modules/modules.js';
window.onscroll = scrollUpArrow;
scrollUp.onclick = scrollToTop;


async function changeAvatar() {
    const url = 'https://reqres.in/api/users?per_page=12'
    const response = await fetch(url)
    console.log(response)
    const info = await response.json() 
    renderAvatar(info)
}
changeAvatar()

function renderAvatar(info2) {
    const checkName = info2.data[0].first_name + ' ' + info2.data[0].last_name;
    console.log(checkName);
    const nameEl = document.querySelector('.team__member-name')
    nameEl.innerText = checkName;
}