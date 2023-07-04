import { data, dom } from '../data.js';

const deleteItemList = (id) => {
    // delete item from the data
    data.items = data.items.filter((item) => item.id !== id);

    // remove from the UI
    document.getElementById(id).remove();
};

export default deleteItemList;
