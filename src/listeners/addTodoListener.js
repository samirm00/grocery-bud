import dom from '../dom.js';
import addTodoHandler from '../handlers/addTodoHandler.js';

const addTodoListener = () => {
    dom.submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        addTodoHandler(dom.input.value);
    });
};

export default addTodoListener;
