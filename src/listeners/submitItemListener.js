import addItemList from '../handlers/addItemHandler.js';
import { data, dom } from '../data.js';

dom.submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addItemList(dom.input.value);
});
