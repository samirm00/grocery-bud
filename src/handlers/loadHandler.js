import data from '../data.js';
import dom from '../dom.js';
import createTodo from '../components/createTodo.js';

const loadHandler = () => {
    data.items.forEach((itemData) => {
        const itemDom = createTodo(itemData);
        dom.itemsList.append(itemDom);
    });
};

export default loadHandler;
