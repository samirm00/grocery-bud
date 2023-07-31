import data from '../data.js';
import dom from '../dom.js';

const deleteTodoListener = () => {
    dom.clearBtn.addEventListener('click', () => {
        dom.itemsList.innerHTML = '';
        data.items = [];
    });
};

export default deleteTodoListener;
