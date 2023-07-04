import addItemList from '../handlers/addItemHandler.js';
import { dom } from '../data.js';

dom.input.addEventListener('keypress', (e) => {
    if (e.key === 13) {
        addItemList(dom.input.value);
    }
    // empty the error
    dom.error.innerText = '';
    dom.error.classList.remove('error1');
});
