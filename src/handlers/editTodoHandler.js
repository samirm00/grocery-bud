import data from '../data.js';
import dom from '../dom.js';

const editTodoHandler = (id) => {
    dom.submitBtn.innerText = 'Edit';
    const item = data.items.find((item) => item.id === id);
    dom.input.value = item.text;
};

export default editTodoHandler;
