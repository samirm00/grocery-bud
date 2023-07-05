import addItemList from '../handlers/addItemHandler.js';
import { dom } from '../data.js';

dom.input.addEventListener('keypress', (e) => {
    dom.error.innerText = '';
    dom.error.classList.remove('error1');
});
