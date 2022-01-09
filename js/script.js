import { startVideo, scrollHandler, scrollToTop } from './modules/modules.js';
import { subscriptionInformation, formValidateCheck } from './modules/form.js';

window.onscroll = scrollHandler;
scrollUp.onclick = scrollToTop;
startVideo();
subscriptionInformation();
formValidateCheck();

