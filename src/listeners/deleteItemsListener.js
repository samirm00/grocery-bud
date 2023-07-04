import { data, dom } from '../data.js';

dom.clearBtn.addEventListener('click', () => {
    dom.itemsList.innerHTML = '';
    data.items = [];
});
