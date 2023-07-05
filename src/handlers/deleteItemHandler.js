import { data, dom } from '../data.js';

const deleteItemList = (id) => {
    // delete item from the data
    data.items = data.items.filter((item) => item.id !== id);

    // remove from the UI
    document.getElementById(id).remove();
    dom.submitBtn.innerText = 'Submit';
    dom.input.value = '';
};

export default deleteItemList;
